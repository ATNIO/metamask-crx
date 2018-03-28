const EventEmitter = require('events')
const async = require('async')
const extend = require('xtend')
const Semaphore = require('semaphore')
const ObservableStore = require('obs-store')
const ethUtil = require('ethereumjs-util')
const EthQuery = require('eth-query')
const TxProviderUtil = require('./lib/tx-utils')
const createId = require('./lib/random-id')

module.exports = class TransactionManager extends EventEmitter {
  constructor (opts) {
    super()
    this.store = new ObservableStore(extend({
      transactions: [],
    }, opts.initState))
    this.memStore = new ObservableStore({})
    this.networkStore = opts.networkStore || new ObservableStore({})
    this.preferencesStore = opts.preferencesStore || new ObservableStore({})
    this.txHistoryLimit = opts.txHistoryLimit
    this.provider = opts.provider
    this.blockTracker = opts.blockTracker
    this.query = new EthQuery(this.provider)
    this.txProviderUtils = new TxProviderUtil(this.provider)
    this.blockTracker.on('block', this.checkForTxInBlock.bind(this))
    this.signEthTx = opts.signTransaction
    this.nonceLock = Semaphore(1)

    // memstore is computed from a few different stores
    this._updateMemstore()
    this.store.subscribe(() => this._updateMemstore() )
    this.networkStore.subscribe(() => this._updateMemstore() )
    this.preferencesStore.subscribe(() => this._updateMemstore() )
  }

  getState () {
    return this.memStore.getState()
  }

  getNetwork () {
    return this.networkStore.getState().network
  }

  getSelectedAddress () {
    return this.preferencesStore.getState().selectedAddress
  }

  // Returns the tx list
  getTxList () {
    let network = this.getNetwork()
    let fullTxList = this.getFullTxList()
    return fullTxList.filter(txMeta => txMeta.metamaskNetworkId === network)
  }

  // Returns the number of txs for the current network.
  getTxCount () {
    return this.getTxList().length
  }

  // Returns the full tx list across all networks
  getFullTxList () {
    return this.store.getState().transactions
  }

  // Adds a tx to the txlist
  addTx (txMeta) {
    let txCount = this.getTxCount()
    let network = this.getNetwork()
    let fullTxList = this.getFullTxList()
    let txHistoryLimit = this.txHistoryLimit

    // checks if the length of the tx history is
    // longer then desired persistence limit
    // and then if it is removes only confirmed
    // or rejected tx's.
    // not tx's that are pending or unapproved
    if (txCount > txHistoryLimit - 1) {
      var index = fullTxList.findIndex((metaTx) => ((metaTx.status === 'confirmed' || metaTx.status === 'rejected') && network === txMeta.metamaskNetworkId))
      fullTxList.splice(index, 1)
    }
    fullTxList.push(txMeta)
    this._saveTxList(fullTxList)
    this.emit('update')

    this.once(`${txMeta.id}:signed`, function (txId) {
      this.removeAllListeners(`${txMeta.id}:rejected`)
    })
    this.once(`${txMeta.id}:rejected`, function (txId) {
      this.removeAllListeners(`${txMeta.id}:signed`)
    })

    this.emit('updateBadge')
    this.emit(`${txMeta.id}:unapproved`, txMeta)
  }

  // gets tx by Id and returns it
  getTx (txId, cb) {
    var txList = this.getTxList()
    var txMeta = txList.find(txData => txData.id === txId)
    return cb ? cb(txMeta) : txMeta
  }

  //
  updateTx (txMeta) {
    var txId = txMeta.id
    var txList = this.getFullTxList()
    var index = txList.findIndex(txData => txData.id === txId)
    txList[index] = txMeta
    this._saveTxList(txList)
    this.emit('update')
  }

  get unapprovedTxCount () {
    return Object.keys(this.getUnapprovedTxList()).length
  }

  get pendingTxCount () {
    return this.getTxsByMetaData('status', 'signed').length
  }

  addUnapprovedTransaction (txParams, done) {
    let txMeta
    async.waterfall([
      // validate
      (cb) => this.txProviderUtils.validateTxParams(txParams, cb),
      // construct txMeta
      (cb) => {
        txMeta = {
          id: createId(),
          time: (new Date()).getTime(),
          status: 'unapproved',
          metamaskNetworkId: this.getNetwork(),
          txParams: txParams,
        }
        cb()
      },
      // add default tx params
      (cb) => this.addTxDefaults(txMeta, cb),
      // save txMeta
      (cb) => {
        this.addTx(txMeta)
        cb(null, txMeta)
      },
    ], done)
  }

  addTxDefaults (txMeta, cb) {
    const txParams = txMeta.txParams
    // ensure value
    txParams.value = txParams.value || '0x0'
    this.query.gasPrice((err, gasPrice) => {
      if (err) return cb(err)
      // set gasPrice
      txParams.gasPrice = gasPrice
      // set gasLimit
      this.txProviderUtils.analyzeGasUsage(txMeta, cb)
    })
  }

  getUnapprovedTxList () {
    var txList = this.getTxList()
    return txList.filter((txMeta) => txMeta.status === 'unapproved')
    .reduce((result, tx) => {
      result[tx.id] = tx
      return result
    }, {})
  }

  approveTransaction (txId, cb = warn) {
    const self = this
    // approve
    self.setTxStatusApproved(txId)
    // only allow one tx at a time for atomic nonce usage
    self.nonceLock.take(() => {
      // begin signature process
      async.waterfall([
        (cb) => self.fillInTxParams(txId, cb),
        (cb) => self.signTransaction(txId, cb),
        (rawTx, cb) => self.publishTransaction(txId, rawTx, cb),
      ], (err) => {
        self.nonceLock.leave()
        if (err) {
          this.setTxStatusFailed(txId, {
            errCode: err.errCode || err,
            message: err.message || 'Transaction failed during approval',
          })
          return cb(err)
        }
        cb()
      })
    })
  }

  cancelTransaction (txId, cb = warn) {
    this.setTxStatusRejected(txId)
    cb()
  }

  fillInTxParams (txId, cb) {
    let txMeta = this.getTx(txId)
    this.txProviderUtils.fillInTxParams(txMeta.txParams, (err) => {
      if (err) return cb(err)
      this.updateTx(txMeta)
      cb()
    })
  }

  signTransaction (txId, cb) {
    let txMeta = this.getTx(txId)
    let txParams = txMeta.txParams
    let fromAddress = txParams.from
    let ethTx = this.txProviderUtils.buildEthTxFromParams(txParams)
    this.signEthTx(ethTx, fromAddress).then(() => {
      this.setTxStatusSigned(txMeta.id)
      cb(null, ethUtil.bufferToHex(ethTx.serialize()))
    }).catch((err) => {
      cb(err)
    })
  }

  publishTransaction (txId, rawTx, cb) {
    this.txProviderUtils.publishTransaction(rawTx, (err, txHash) => {
      if (err) return cb(err)
      this.setTxHash(txId, txHash)
      this.setTxStatusSubmitted(txId)
      cb()
    })
  }

  // receives a txHash records the tx as signed
  setTxHash (txId, txHash) {
    // Add the tx hash to the persisted meta-tx object
    let txMeta = this.getTx(txId)
    txMeta.hash = txHash
    this.updateTx(txMeta)
  }

  /*
  Takes an object of fields to search for eg:
  var thingsToLookFor = {
    to: '0x0..',
    from: '0x0..',
    status: 'signed',
  }
  and returns a list of tx with all
  options matching

  this is for things like filtering a the tx list
  for only tx's from 1 account
  or for filltering for all txs from one account
  and that have been 'confirmed'
  */
  getFilteredTxList (opts) {
    var filteredTxList
    Object.keys(opts).forEach((key) => {
      filteredTxList = this.getTxsByMetaData(key, opts[key], filteredTxList)
    })
    return filteredTxList
  }

  getTxsByMetaData (key, value, txList = this.getTxList()) {
    return txList.filter((txMeta) => {
      if (txMeta.txParams[key]) {
        return txMeta.txParams[key] === value
      } else {
        return txMeta[key] === value
      }
    })
  }

  // STATUS METHODS
  // get::set status

  // should return the status of the tx.
  getTxStatus (txId) {
    const txMeta = this.getTx(txId)
    return txMeta.status
  }

  // should update the status of the tx to 'rejected'.
  setTxStatusRejected (txId) {
    this._setTxStatus(txId, 'rejected')
  }

  // should update the status of the tx to 'approved'.
  setTxStatusApproved (txId) {
    this._setTxStatus(txId, 'approved')
  }

  // should update the status of the tx to 'signed'.
  setTxStatusSigned (txId) {
    this._setTxStatus(txId, 'signed')
  }

  // should update the status of the tx to 'submitted'.
  setTxStatusSubmitted (txId) {
    this._setTxStatus(txId, 'submitted')
  }

  // should update the status of the tx to 'confirmed'.
  setTxStatusConfirmed (txId) {
    this._setTxStatus(txId, 'confirmed')
  }

  setTxStatusFailed (txId, reason) {
    let txMeta = this.getTx(txId)
    txMeta.err = reason
    this.updateTx(txMeta)
    this._setTxStatus(txId, 'failed')
  }

  // merges txParams obj onto txData.txParams
  // use extend to ensure that all fields are filled
  updateTxParams (txId, txParams) {
    var txMeta = this.getTx(txId)
    txMeta.txParams = extend(txMeta.txParams, txParams)
    this.updateTx(txMeta)
  }

  //  checks if a signed tx is in a block and
  // if included sets the tx status as 'confirmed'
  checkForTxInBlock () {
    var signedTxList = this.getFilteredTxList({status: 'submitted'})
    if (!signedTxList.length) return
    signedTxList.forEach((txMeta) => {
      var txHash = txMeta.hash
      var txId = txMeta.id
      if (!txHash) {
        let errReason = {
          errCode: 'No hash was provided',
          message: 'We had an error while submitting this transaction, please try again.',
        }
        return this.setTxStatusFailed(txId, errReason)
      }
      this.query.getTransactionByHash(txHash, (err, txParams) => {
        if (err || !txParams) {
          if (!txParams) return
          txMeta.err = {
            isWarning: true,
            errorCode: err,
            message: 'There was a problem loading this transaction.',
          }
          this.updateTx(txMeta)
          return console.error(err)
        }
        if (txParams.blockNumber) {
          this.setTxStatusConfirmed(txId)
        }
      })
    })
  }

  // PRIVATE METHODS

  //  Should find the tx in the tx list and
  //  update it.
  //  should set the status in txData
  //    - `'unapproved'` the user has not responded
  //    - `'rejected'` the user has responded no!
  //    - `'approved'` the user has approved the tx
  //    - `'signed'` the tx is signed
  //    - `'submitted'` the tx is sent to a server
  //    - `'confirmed'` the tx has been included in a block.
  _setTxStatus (txId, status) {
    var txMeta = this.getTx(txId)
    txMeta.status = status
    this.emit(`${txMeta.id}:${status}`, txId)
    if (status === 'submitted' || status === 'rejected') {
      this.emit(`${txMeta.id}:finished`, txMeta)
    }
    this.updateTx(txMeta)
    this.emit('updateBadge')
  }

  // Saves the new/updated txList.
  // Function is intended only for internal use
  _saveTxList (transactions) {
    this.store.updateState({ transactions })
  }

  _updateMemstore () {
    const unapprovedTxs = this.getUnapprovedTxList()
    const selectedAddressTxList = this.getFilteredTxList({
      from: this.getSelectedAddress(),
      metamaskNetworkId: this.getNetwork(),
    })
    this.memStore.updateState({ unapprovedTxs, selectedAddressTxList })
  }
}


const warn = () => console.warn('warn was used no cb provided')

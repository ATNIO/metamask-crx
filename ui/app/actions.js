var actions = {
  _setBackgroundConnection: _setBackgroundConnection,

  GO_HOME: 'GO_HOME',
  goHome: goHome,
  // menu state
  getNetworkStatus: 'getNetworkStatus',
  // transition state
  TRANSITION_FORWARD: 'TRANSITION_FORWARD',
  TRANSITION_BACKWARD: 'TRANSITION_BACKWARD',
  transitionForward,
  transitionBackward,
  // remote state
  UPDATE_METAMASK_STATE: 'UPDATE_METAMASK_STATE',
  updateMetamaskState: updateMetamaskState,
  // notices
  MARK_NOTICE_READ: 'MARK_NOTICE_READ',
  markNoticeRead: markNoticeRead,
  SHOW_NOTICE: 'SHOW_NOTICE',
  showNotice: showNotice,
  CLEAR_NOTICES: 'CLEAR_NOTICES',
  clearNotices: clearNotices,
  markAccountsFound,
  // intialize screen
  CREATE_NEW_VAULT_IN_PROGRESS: 'CREATE_NEW_VAULT_IN_PROGRESS',
  SHOW_CREATE_VAULT: 'SHOW_CREATE_VAULT',
  SHOW_RESTORE_VAULT: 'SHOW_RESTORE_VAULT',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  forgotPassword: forgotPassword,
  SHOW_INIT_MENU: 'SHOW_INIT_MENU',
  SHOW_NEW_VAULT_SEED: 'SHOW_NEW_VAULT_SEED',
  SHOW_INFO_PAGE: 'SHOW_INFO_PAGE',
  SHOW_IMPORT_PAGE: 'SHOW_IMPORT_PAGE',
  unlockMetamask: unlockMetamask,
  unlockFailed: unlockFailed,
  showCreateVault: showCreateVault,
  showRestoreVault: showRestoreVault,
  showInitializeMenu: showInitializeMenu,
  showImportPage,
  createNewVaultAndKeychain: createNewVaultAndKeychain,
  createNewVaultAndRestore: createNewVaultAndRestore,
  createNewVaultInProgress: createNewVaultInProgress,
  addNewKeyring,
  importNewAccount,
  addNewAccount,
  NEW_ACCOUNT_SCREEN: 'NEW_ACCOUNT_SCREEN',
  navigateToNewAccountScreen,
  showNewVaultSeed: showNewVaultSeed,
  showInfoPage: showInfoPage,
  // seed recovery actions
  REVEAL_SEED_CONFIRMATION: 'REVEAL_SEED_CONFIRMATION',
  revealSeedConfirmation: revealSeedConfirmation,
  requestRevealSeed: requestRevealSeed,
  // unlock screen
  UNLOCK_IN_PROGRESS: 'UNLOCK_IN_PROGRESS',
  UNLOCK_FAILED: 'UNLOCK_FAILED',
  UNLOCK_METAMASK: 'UNLOCK_METAMASK',
  LOCK_METAMASK: 'LOCK_METAMASK',
  tryUnlockMetamask: tryUnlockMetamask,
  lockMetamask: lockMetamask,
  unlockInProgress: unlockInProgress,
  // error handling
  displayWarning: displayWarning,
  DISPLAY_WARNING: 'DISPLAY_WARNING',
  HIDE_WARNING: 'HIDE_WARNING',
  hideWarning: hideWarning,
  // accounts screen
  SET_SELECTED_ACCOUNT: 'SET_SELECTED_ACCOUNT',
  SHOW_ACCOUNT_DETAIL: 'SHOW_ACCOUNT_DETAIL',
  SHOW_ACCOUNTS_PAGE: 'SHOW_ACCOUNTS_PAGE',
  SHOW_CONF_TX_PAGE: 'SHOW_CONF_TX_PAGE',
  SHOW_CONF_MSG_PAGE: 'SHOW_CONF_MSG_PAGE',
  SET_CURRENT_FIAT: 'SET_CURRENT_FIAT',
  setCurrentCurrency: setCurrentCurrency,
  // account detail screen
  SHOW_SEND_PAGE: 'SHOW_SEND_PAGE',
  showSendPage: showSendPage,
  ADD_TO_ADDRESS_BOOK: 'ADD_TO_ADDRESS_BOOK',
  addToAddressBook: addToAddressBook,
  REQUEST_ACCOUNT_EXPORT: 'REQUEST_ACCOUNT_EXPORT',
  requestExportAccount: requestExportAccount,
  EXPORT_ACCOUNT: 'EXPORT_ACCOUNT',
  exportAccount: exportAccount,
  SHOW_PRIVATE_KEY: 'SHOW_PRIVATE_KEY',
  showPrivateKey: showPrivateKey,
  SAVE_ACCOUNT_LABEL: 'SAVE_ACCOUNT_LABEL',
  saveAccountLabel: saveAccountLabel,
  // tx conf screen
  COMPLETED_TX: 'COMPLETED_TX',
  TRANSACTION_ERROR: 'TRANSACTION_ERROR',
  NEXT_TX: 'NEXT_TX',
  PREVIOUS_TX: 'PREV_TX',
  signMsg: signMsg,
  cancelMsg: cancelMsg,
  signPersonalMsg,
  cancelPersonalMsg,
  sendTx: sendTx,
  signTx: signTx,
  updateAndApproveTx,
  cancelTx: cancelTx,
  completedTx: completedTx,
  txError: txError,
  nextTx: nextTx,
  previousTx: previousTx,
  viewPendingTx: viewPendingTx,
  VIEW_PENDING_TX: 'VIEW_PENDING_TX',
  // app messages
  confirmSeedWords: confirmSeedWords,
  showAccountDetail: showAccountDetail,
  BACK_TO_ACCOUNT_DETAIL: 'BACK_TO_ACCOUNT_DETAIL',
  backToAccountDetail: backToAccountDetail,
  showAccountsPage: showAccountsPage,
  showConfTxPage: showConfTxPage,
  // config screen
  SHOW_CONFIG_PAGE: 'SHOW_CONFIG_PAGE',
  SET_RPC_TARGET: 'SET_RPC_TARGET',
  SET_DEFAULT_RPC_TARGET: 'SET_DEFAULT_RPC_TARGET',
  SET_PROVIDER_TYPE: 'SET_PROVIDER_TYPE',
  USE_ETHERSCAN_PROVIDER: 'USE_ETHERSCAN_PROVIDER',
  useEtherscanProvider: useEtherscanProvider,
  showConfigPage: showConfigPage,
  setRpcTarget: setRpcTarget,
  setDefaultRpcTarget: setDefaultRpcTarget,
  setProviderType: setProviderType,
  // loading overlay
  SHOW_LOADING: 'SHOW_LOADING_INDICATION',
  HIDE_LOADING: 'HIDE_LOADING_INDICATION',
  showLoadingIndication: showLoadingIndication,
  hideLoadingIndication: hideLoadingIndication,
  // buy Eth with coinbase
  BUY_ETH: 'BUY_ETH',
  buyEth: buyEth,
  buyEthView: buyEthView,
  BUY_ETH_VIEW: 'BUY_ETH_VIEW',
  UPDATE_COINBASE_AMOUNT: 'UPDATE_COIBASE_AMOUNT',
  updateCoinBaseAmount: updateCoinBaseAmount,
  UPDATE_BUY_ADDRESS: 'UPDATE_BUY_ADDRESS',
  updateBuyAddress: updateBuyAddress,
  COINBASE_SUBVIEW: 'COINBASE_SUBVIEW',
  coinBaseSubview: coinBaseSubview,
  SHAPESHIFT_SUBVIEW: 'SHAPESHIFT_SUBVIEW',
  shapeShiftSubview: shapeShiftSubview,
  PAIR_UPDATE: 'PAIR_UPDATE',
  pairUpdate: pairUpdate,
  coinShiftRquest: coinShiftRquest,
  SHOW_SUB_LOADING_INDICATION: 'SHOW_SUB_LOADING_INDICATION',
  showSubLoadingIndication: showSubLoadingIndication,
  HIDE_SUB_LOADING_INDICATION: 'HIDE_SUB_LOADING_INDICATION',
  hideSubLoadingIndication: hideSubLoadingIndication,
// QR STUFF:
  SHOW_QR: 'SHOW_QR',
  showQrView: showQrView,
  reshowQrCode: reshowQrCode,
  SHOW_QR_VIEW: 'SHOW_QR_VIEW',
// FORGOT PASSWORD:
  BACK_TO_INIT_MENU: 'BACK_TO_INIT_MENU',
  goBackToInitView: goBackToInitView,
  RECOVERY_IN_PROGRESS: 'RECOVERY_IN_PROGRESS',
  BACK_TO_UNLOCK_VIEW: 'BACK_TO_UNLOCK_VIEW',
  backToUnlockView: backToUnlockView,
  // SHOWING KEYCHAIN
  SHOW_NEW_KEYCHAIN: 'SHOW_NEW_KEYCHAIN',
  showNewKeychain: showNewKeychain,

  callBackgroundThenUpdate,
  forceUpdateMetamaskState,
}

module.exports = actions

var background = null
function _setBackgroundConnection (backgroundConnection) {
  background = backgroundConnection
}

function goHome () {
  return {
    type: actions.GO_HOME,
  }
}

// async actions

function tryUnlockMetamask (password) {
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())
    dispatch(actions.unlockInProgress())
    log.debug(`background.submitPassword`)
    background.submitPassword(password, (err) => {
      dispatch(actions.hideLoadingIndication())
      if (err) {
        dispatch(actions.unlockFailed(err.message))
      } else {
        dispatch(actions.transitionForward())
        forceUpdateMetamaskState(dispatch)
      }
    })
  }
}

function transitionForward () {
  return {
    type: this.TRANSITION_FORWARD,
  }
}

function transitionBackward () {
  return {
    type: this.TRANSITION_BACKWARD,
  }
}

function confirmSeedWords () {
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())
    log.debug(`background.clearSeedWordCache`)
    background.clearSeedWordCache((err, account) => {
      dispatch(actions.hideLoadingIndication())
      if (err) {
        return dispatch(actions.displayWarning(err.message))
      }

      console.log('Seed word cache cleared. ' + account)
      dispatch(actions.showAccountDetail(account))
    })
  }
}

function createNewVaultAndRestore (password, seed) {
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())
    log.debug(`background.createNewVaultAndRestore`)
    background.createNewVaultAndRestore(password, seed, (err) => {
      dispatch(actions.hideLoadingIndication())
      if (err) return dispatch(actions.displayWarning(err.message))
      dispatch(actions.showAccountsPage())
    })
  }
}

function createNewVaultAndKeychain (password) {
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())
    log.debug(`background.createNewVaultAndKeychain`)
    background.createNewVaultAndKeychain(password, (err) => {
      if (err) {
        return dispatch(actions.displayWarning(err.message))
      }
      log.debug(`background.placeSeedWords`)
      background.placeSeedWords((err) => {
        if (err) {
          return dispatch(actions.displayWarning(err.message))
        }
        dispatch(actions.hideLoadingIndication())
        forceUpdateMetamaskState(dispatch)
      })
    })
  }
}

function revealSeedConfirmation () {
  return {
    type: this.REVEAL_SEED_CONFIRMATION,
  }
}

function requestRevealSeed (password) {
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())
    log.debug(`background.submitPassword`)
    background.submitPassword(password, (err) => {
      if (err) {
        return dispatch(actions.displayWarning(err.message))
      }
      log.debug(`background.placeSeedWords`)
      background.placeSeedWords((err, result) => {
        if (err) return dispatch(actions.displayWarning(err.message))
        dispatch(actions.hideLoadingIndication())
        dispatch(actions.showNewVaultSeed(result))
      })
    })
  }
}

function addNewKeyring (type, opts) {
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())
    log.debug(`background.addNewKeyring`)
    background.addNewKeyring(type, opts, (err) => {
      dispatch(actions.hideLoadingIndication())
      if (err) return dispatch(actions.displayWarning(err.message))
      dispatch(actions.showAccountsPage())
    })
  }
}

function importNewAccount (strategy, args) {
  return (dispatch) => {
    dispatch(actions.showLoadingIndication('This may take a while, be patient.'))
    log.debug(`background.importAccountWithStrategy`)
    background.importAccountWithStrategy(strategy, args, (err) => {
      if (err) return dispatch(actions.displayWarning(err.message))
      log.debug(`background.getState`)
      background.getState((err, newState) => {
        dispatch(actions.hideLoadingIndication())
        if (err) {
          return dispatch(actions.displayWarning(err.message))
        }
        dispatch(actions.updateMetamaskState(newState))
        dispatch({
          type: actions.SHOW_ACCOUNT_DETAIL,
          value: newState.selectedAddress,
        })
      })
    })
  }
}

function navigateToNewAccountScreen() {
  return {
    type: this.NEW_ACCOUNT_SCREEN,
  }
}

function addNewAccount () {
  log.debug(`background.addNewAccount`)
  return callBackgroundThenUpdate(background.addNewAccount)
}

function showInfoPage () {
  return {
    type: actions.SHOW_INFO_PAGE,
  }
}

function setCurrentCurrency (currencyCode) {
  return (dispatch) => {
    dispatch(this.showLoadingIndication())
    log.debug(`background.setCurrentCurrency`)
    background.setCurrentCurrency(currencyCode, (err, data) => {
      dispatch(this.hideLoadingIndication())
      if (err) {
        console.error(err.stack)
        return dispatch(actions.displayWarning(err.message))
      }
      dispatch({
        type: this.SET_CURRENT_FIAT,
        value: {
          currentCurrency: data.currentCurrency,
          conversionRate: data.conversionRate,
          conversionDate: data.conversionDate,
        },
      })
    })
  }
}

function signMsg (msgData) {
  log.debug('action - signMsg')
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())

    log.debug(`actions calling background.signMessage`)
    background.signMessage(msgData, (err, newState) => {
      log.debug('signMessage called back')
      dispatch(actions.updateMetamaskState(newState))
      dispatch(actions.hideLoadingIndication())

      if (err) log.error(err)
      if (err) return dispatch(actions.displayWarning(err.message))

      dispatch(actions.completedTx(msgData.metamaskId))
    })
  }
}

function signPersonalMsg (msgData) {
  log.debug('action - signPersonalMsg')
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())

    log.debug(`actions calling background.signPersonalMessage`)
    background.signPersonalMessage(msgData, (err, newState) => {
      log.debug('signPersonalMessage called back')
      dispatch(actions.updateMetamaskState(newState))
      dispatch(actions.hideLoadingIndication())

      if (err) log.error(err)
      if (err) return dispatch(actions.displayWarning(err.message))

      dispatch(actions.completedTx(msgData.metamaskId))
    })
  }
}

function signTx (txData) {
  return (dispatch) => {
    web3.eth.sendTransaction(txData, (err, data) => {
      dispatch(actions.hideLoadingIndication())
      if (err) return dispatch(actions.displayWarning(err.message))
      dispatch(actions.hideWarning())
    })
    dispatch(this.showConfTxPage())
  }
}

function sendTx (txData) {
  log.info(`actions - sendTx: ${JSON.stringify(txData.txParams)}`)
  return (dispatch) => {
    log.debug(`actions calling background.approveTransaction`)
    background.approveTransaction(txData.id, (err) => {
      if (err) {
        dispatch(actions.txError(err))
        return console.error(err.message)
      }
      dispatch(actions.completedTx(txData.id))
    })
  }
}

function updateAndApproveTx (txData) {
  log.info('actions: updateAndApproveTx: ' + JSON.stringify(txData))
  return (dispatch) => {
    log.debug(`actions calling background.updateAndApproveTx`)
    background.updateAndApproveTransaction(txData, (err) => {
      dispatch(actions.hideLoadingIndication())
      if (err) {
        dispatch(actions.txError(err))
        return console.error(err.message)
      }
      dispatch(actions.completedTx(txData.id))
    })
  }
}

function completedTx (id) {
  return {
    type: actions.COMPLETED_TX,
    value: id,
  }
}

function txError (err) {
  return {
    type: actions.TRANSACTION_ERROR,
    message: err.message,
  }
}

function cancelMsg (msgData) {
  log.debug(`background.cancelMessage`)
  background.cancelMessage(msgData.id)
  return actions.completedTx(msgData.id)
}

function cancelPersonalMsg (msgData) {
  const id = msgData.id
  background.cancelPersonalMessage(id)
  return actions.completedTx(id)
}

function cancelTx (txData) {
  log.debug(`background.cancelTransaction`)
  background.cancelTransaction(txData.id)
  return actions.completedTx(txData.id)
}

//
// initialize screen
//

function showCreateVault () {
  return {
    type: actions.SHOW_CREATE_VAULT,
  }
}

function showRestoreVault () {
  return {
    type: actions.SHOW_RESTORE_VAULT,
  }
}

function forgotPassword () {
  return {
    type: actions.FORGOT_PASSWORD,
  }
}

function showInitializeMenu () {
  return {
    type: actions.SHOW_INIT_MENU,
  }
}

function showImportPage () {
  return {
    type: actions.SHOW_IMPORT_PAGE,
  }
}

function createNewVaultInProgress () {
  return {
    type: actions.CREATE_NEW_VAULT_IN_PROGRESS,
  }
}

function showNewVaultSeed (seed) {
  return {
    type: actions.SHOW_NEW_VAULT_SEED,
    value: seed,
  }
}

function backToUnlockView () {
  return {
    type: actions.BACK_TO_UNLOCK_VIEW,
  }
}

function showNewKeychain () {
  return {
    type: actions.SHOW_NEW_KEYCHAIN,
  }
}

//
// unlock screen
//

function unlockInProgress () {
  return {
    type: actions.UNLOCK_IN_PROGRESS,
  }
}

function unlockFailed (message) {
  return {
    type: actions.UNLOCK_FAILED,
    value: message,
  }
}

function unlockMetamask (account) {
  return {
    type: actions.UNLOCK_METAMASK,
    value: account,
  }
}

function updateMetamaskState (newState) {
  return {
    type: actions.UPDATE_METAMASK_STATE,
    value: newState,
  }
}

function lockMetamask () {
  log.debug(`background.setLocked`)
  return callBackgroundThenUpdate(background.setLocked)
}

function showAccountDetail (address) {
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())
    log.debug(`background.setSelectedAddress`)
    background.setSelectedAddress(address, (err) => {
      dispatch(actions.hideLoadingIndication())
      if (err) {
        return dispatch(actions.displayWarning(err.message))
      }
      dispatch({
        type: actions.SHOW_ACCOUNT_DETAIL,
        value: address,
      })
    })
  }
}

function backToAccountDetail (address) {
  return {
    type: actions.BACK_TO_ACCOUNT_DETAIL,
    value: address,
  }
}

function showAccountsPage () {
  return {
    type: actions.SHOW_ACCOUNTS_PAGE,
  }
}

function showConfTxPage (transForward = true) {
  return {
    type: actions.SHOW_CONF_TX_PAGE,
    transForward: transForward,
  }
}

function nextTx () {
  return {
    type: actions.NEXT_TX,
  }
}

function viewPendingTx (txId) {
  return {
    type: actions.VIEW_PENDING_TX,
    value: txId,
  }
}

function previousTx () {
  return {
    type: actions.PREVIOUS_TX,
  }
}

function showConfigPage (transitionForward = true) {
  return {
    type: actions.SHOW_CONFIG_PAGE,
    value: transitionForward,
  }
}

function goBackToInitView () {
  return {
    type: actions.BACK_TO_INIT_MENU,
  }
}

//
// notice
//

function markNoticeRead (notice) {
  return (dispatch) => {
    dispatch(this.showLoadingIndication())
    log.debug(`background.markNoticeRead`)
    background.markNoticeRead(notice, (err, notice) => {
      dispatch(this.hideLoadingIndication())
      if (err) {
        return dispatch(actions.displayWarning(err))
      }
      if (notice) {
        return dispatch(actions.showNotice(notice))
      } else {
        dispatch(this.clearNotices())
        return {
          type: actions.SHOW_ACCOUNTS_PAGE,
        }
      }
    })
  }
}

function showNotice (notice) {
  return {
    type: actions.SHOW_NOTICE,
    value: notice,
  }
}

function clearNotices () {
  return {
    type: actions.CLEAR_NOTICES,
  }
}

function markAccountsFound() {
  log.debug(`background.markAccountsFound`)
  return callBackgroundThenUpdate(background.markAccountsFound)
}

//
// config
//

// default rpc target refers to localhost:8545 in this instance.
function setDefaultRpcTarget (rpcList) {
  log.debug(`background.setDefaultRpcTarget`)
  return (dispatch) => {
    background.setDefaultRpc((err, result) => {
      if (err) {
        log.error(err)
        return dispatch(self.displayWarning('Had a problem changing networks.'))
      }
    })
  }
}

function setRpcTarget (newRpc) {
  log.debug(`background.setRpcTarget`)
  return (dispatch) => {
    background.setCustomRpc(newRpc, (err, result) => {
      if (err) {
        log.error(err)
        return dispatch(self.displayWarning('Had a problem changing networks!'))
      }
    })
  }
}

// Calls the addressBookController to add a new address.
function addToAddressBook (recipient, nickname) {
  log.debug(`background.addToAddressBook`)
  return (dispatch) => {
    background.setAddressBook(recipient, nickname, (err, result) => {
      if (err) {
        log.error(err)
        return dispatch(self.displayWarning('Address book failed to update'))
      }
    })
  }
}

function setProviderType (type) {
  log.debug(`background.setProviderType`)
  background.setProviderType(type)
  return {
    type: actions.SET_PROVIDER_TYPE,
    value: type,
  }
}

function useEtherscanProvider () {
  log.debug(`background.useEtherscanProvider`)
  background.useEtherscanProvider()
  return {
    type: actions.USE_ETHERSCAN_PROVIDER,
  }
}

function showLoadingIndication (message) {
  return {
    type: actions.SHOW_LOADING,
    value: message,
  }
}

function hideLoadingIndication () {
  return {
    type: actions.HIDE_LOADING,
  }
}

function showSubLoadingIndication () {
  return {
    type: actions.SHOW_SUB_LOADING_INDICATION,
  }
}

function hideSubLoadingIndication () {
  return {
    type: actions.HIDE_SUB_LOADING_INDICATION,
  }
}

function displayWarning (text) {
  return {
    type: actions.DISPLAY_WARNING,
    value: text,
  }
}

function hideWarning () {
  return {
    type: actions.HIDE_WARNING,
  }
}

function requestExportAccount () {
  return {
    type: actions.REQUEST_ACCOUNT_EXPORT,
  }
}

function exportAccount (password, address) {
  var self = this

  return function (dispatch) {
    dispatch(self.showLoadingIndication())

    log.debug(`background.submitPassword`)
    background.submitPassword(password, function (err) {
      if (err) {
        log.error('Error in submiting password.')
        dispatch(self.hideLoadingIndication())
        return dispatch(self.displayWarning('Incorrect Password.'))
      }
      log.debug(`background.exportAccount`)
      background.exportAccount(address, function (err, result) {
        dispatch(self.hideLoadingIndication())

        if (err) {
          log.error(err)
          return dispatch(self.displayWarning('Had a problem exporting the account.'))
        }

        dispatch(self.showPrivateKey(result))
      })
    })
  }
}

function showPrivateKey (key) {
  return {
    type: actions.SHOW_PRIVATE_KEY,
    value: key,
  }
}

function saveAccountLabel (account, label) {
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())
    log.debug(`background.saveAccountLabel`)
    background.saveAccountLabel(account, label, (err) => {
      dispatch(actions.hideLoadingIndication())
      if (err) {
        return dispatch(actions.displayWarning(err.message))
      }
      dispatch({
        type: actions.SAVE_ACCOUNT_LABEL,
        value: { account, label },
      })
    })
  }
}

function showSendPage () {
  return {
    type: actions.SHOW_SEND_PAGE,
  }
}

function buyEth (address, amount) {
  return (dispatch) => {
    log.debug(`background.buyEth`)
    background.buyEth(address, amount)
    dispatch({
      type: actions.BUY_ETH,
    })
  }
}

function buyEthView (address) {
  return {
    type: actions.BUY_ETH_VIEW,
    value: address,
  }
}

function updateCoinBaseAmount (value) {
  return {
    type: actions.UPDATE_COINBASE_AMOUNT,
    value,
  }
}

function updateBuyAddress (value) {
  return {
    type: actions.UPDATE_BUY_ADDRESS,
    value,
  }
}

function coinBaseSubview () {
  return {
    type: actions.COINBASE_SUBVIEW,
  }
}

function pairUpdate (coin) {
  return (dispatch) => {
    dispatch(actions.showSubLoadingIndication())
    dispatch(actions.hideWarning())
    shapeShiftRequest('marketinfo', {pair: `${coin.toLowerCase()}_eth`}, (mktResponse) => {
      dispatch(actions.hideSubLoadingIndication())
      dispatch({
        type: actions.PAIR_UPDATE,
        value: {
          marketinfo: mktResponse,
        },
      })
    })
  }
}

function shapeShiftSubview (network) {
  var pair = 'btc_eth'

  return (dispatch) => {
    dispatch(actions.showSubLoadingIndication())
    shapeShiftRequest('marketinfo', {pair}, (mktResponse) => {
      shapeShiftRequest('getcoins', {}, (response) => {
        dispatch(actions.hideSubLoadingIndication())
        if (mktResponse.error) return dispatch(actions.displayWarning(mktResponse.error))
        dispatch({
          type: actions.SHAPESHIFT_SUBVIEW,
          value: {
            marketinfo: mktResponse,
            coinOptions: response,
          },
        })
      })
    })
  }
}

function coinShiftRquest (data, marketData) {
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())
    shapeShiftRequest('shift', { method: 'POST', data}, (response) => {
      dispatch(actions.hideLoadingIndication())
      if (response.error) return dispatch(actions.displayWarning(response.error))
      var message = `
        Deposit your ${response.depositType} to the address bellow:`
      log.debug(`background.createShapeShiftTx`)
      background.createShapeShiftTx(response.deposit, response.depositType)
      dispatch(actions.showQrView(response.deposit, [message].concat(marketData)))
    })
  }
}

function showQrView (data, message) {
  return {
    type: actions.SHOW_QR_VIEW,
    value: {
      message: message,
      data: data,
    },
  }
}
function reshowQrCode (data, coin) {
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())
    shapeShiftRequest('marketinfo', {pair: `${coin.toLowerCase()}_eth`}, (mktResponse) => {
      if (mktResponse.error) return dispatch(actions.displayWarning(mktResponse.error))

      var message = [
        `Deposit your ${coin} to the address bellow:`,
        `Deposit Limit: ${mktResponse.limit}`,
        `Deposit Minimum:${mktResponse.minimum}`,
      ]

      dispatch(actions.hideLoadingIndication())
      return dispatch(actions.showQrView(data, message))
    })
  }
}

function shapeShiftRequest (query, options, cb) {
  var queryResponse, method
  !options ? options = {} : null
  options.method ? method = options.method : method = 'GET'

  var requestListner = function (request) {
    queryResponse = JSON.parse(this.responseText)
    cb ? cb(queryResponse) : null
    return queryResponse
  }

  var shapShiftReq = new XMLHttpRequest()
  shapShiftReq.addEventListener('load', requestListner)
  shapShiftReq.open(method, `https://shapeshift.io/${query}/${options.pair ? options.pair : ''}`, true)

  if (options.method === 'POST') {
    var jsonObj = JSON.stringify(options.data)
    shapShiftReq.setRequestHeader('Content-Type', 'application/json')
    return shapShiftReq.send(jsonObj)
  } else {
    return shapShiftReq.send()
  }
}

// Call Background Then Update
//
// A function generator for a common pattern wherein:
// We show loading indication.
// We call a background method.
// We hide loading indication.
// If it errored, we show a warning.
// If it didn't, we update the state.
function callBackgroundThenUpdate (method, ...args) {
  return (dispatch) => {
    dispatch(actions.showLoadingIndication())
    method.call(background, ...args, (err) => {
      dispatch(actions.hideLoadingIndication())
      if (err) {
        return dispatch(actions.displayWarning(err.message))
      }
      forceUpdateMetamaskState(dispatch)
    })
  }
}

function forceUpdateMetamaskState(dispatch){
  log.debug(`background.getState`)
  background.getState((err, newState) => {
    if (err) {
      return dispatch(actions.displayWarning(err.message))
    }
    dispatch(actions.updateMetamaskState(newState))
  })
}

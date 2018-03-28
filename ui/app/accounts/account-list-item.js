const Component = require('react').Component
const h = require('react-hyperscript')
const inherits = require('util').inherits
const ethUtil = require('ethereumjs-util')

const EthBalance = require('../components/eth-balance')
const CopyButton = require('../components/copyButton')
const Identicon = require('../components/identicon')

module.exports = AccountListItem

inherits(AccountListItem, Component)
function AccountListItem () {
  Component.call(this)
}

AccountListItem.prototype.render = function () {
  const { identity, selectedAddress, accounts, onShowDetail } = this.props

  const checksumAddress = identity && identity.address && ethUtil.toChecksumAddress(identity.address)
  const isSelected = selectedAddress === identity.address
  const account = accounts[identity.address]
  const selectedClass = isSelected ? '.selected' : ''

  return (
    h(`.accounts-list-option.flex-row.flex-space-between.pointer.hover-white${selectedClass}`, {
      key: `account-panel-${identity.address}`,
      onClick: (event) => onShowDetail(identity.address, event),
    }, [

      h('.identicon-wrapper.flex-column.flex-center.select-none', [
        this.pendingOrNot(),
        this.indicateIfLoose(),
        h(Identicon, {
          address: identity.address,
          imageify: true,
        }),
      ]),

      // account address, balance
      h('.identity-data.flex-column.flex-justify-center.flex-grow.select-none', {
        style: {
          width: '200px',
        },
      }, [
        h('span', identity.name),
        h('span.font-small', {
          style: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        }, checksumAddress),
        h(EthBalance, {
          value: account && account.balance,
          style: {
            lineHeight: '7px',
            marginTop: '10px',
          },
        }),
      ]),

      // copy button
      h('.identity-copy.flex-column', {
        style: {
          margin: '0 20px',
        },
      }, [
        h(CopyButton, {
          value: checksumAddress,
        }),
      ]),
    ])
  )
}

AccountListItem.prototype.indicateIfLoose = function () {
  try { // Sometimes keyrings aren't loaded yet:
    const type = this.props.keyring.type
    const isLoose = type !== 'HD Key Tree'
    return isLoose ? h('.keyring-label', 'LOOSE') : null
  } catch (e) { return }
}

AccountListItem.prototype.pendingOrNot = function () {
  const pending = this.props.pending
  if (pending.length === 0) return null
  return h('.pending-dot', pending.length)
}

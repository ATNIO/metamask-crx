# Changelog

## Current Master

## 3.5.2 2017-3-28

- Fix bug where gas estimate totals were sometimes wrong.
- Add link to Kovan Test Faucet instructions on buy view.
- Inject web3 into loaded iFrames.

## 3.5.1 2017-3-27

- Fix edge case where users were unable to enable the notice button if notices were short enough to not require a scrollbar.

## 3.5.0 2017-3-27

- Add better error messages for when a transaction fails on approval
- Allow sending to ENS names in send form on Ropsten.
- Added an address book functionality that remembers the last 15 unique addresses sent to.
- Can now change network to custom RPC URL from lock screen.
- Removed support for old, lightwallet based vault. Users who have not opened app in over a month will need to recover with their seed phrase. This will allow Firefox support sooner.
- Fixed bug where spinner wouldn't disappear on incorrect password submission on seed word reveal.
- Polish the private key UI.
- Enforce minimum values for gas price and gas limit.
- Fix bug where total gas was sometimes not live-updated.
- Fix bug where editing gas value could have some abrupt behaviors (#1233)
- Add Kovan as an option on our network list.
- Fixed bug where transactions on other networks would disappear when submitting a transaction on another network.

## 3.4.0 2017-3-8

- Add two most recently used custom RPCs to network dropdown menu.
- Add personal_sign method support.
- Add personal_ecRecover method support.
- Add ability to customize gas and gasPrice on the transaction approval screen.
- Increase default gas buffer to 1.5x estimated gas value.

## 3.3.0 2017-2-20

- net_version has been made synchronous.
- Test suite for migrations expanded.
- Network now changeable from lock screen.
- Improve test coverage of eth.sign behavior, including a code example of verifying a signature.

## 3.2.2 2017-2-8

- Revert eth.sign behavior to the previous one with a big warning.  We will be gradually implementing the new behavior over the coming time. https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign

- Improve test coverage of eth.sign behavior, including a code example of verifying a signature.

## 3.2.2 2017-2-8

- Revert eth.sign behavior to the previous one with a big warning.  We will be gradually implementing the new behavior over the coming time. https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign

## 3.2.1 2017-2-8

- Revert back to old style message signing.
- Fixed some build errors that were causing a variety of bugs.

## 3.2.0 2017-2-8

- Add ability to import accounts in JSON file format (used by Mist, Geth, MyEtherWallet, and more!)
- Fix unapproved messages not being included in extension badge.
- Fix rendering bug where the Confirm transaction view would lets you approve transactions when the account has insufficient balance.

## 3.1.2 2017-1-24

- Fix "New Account" default keychain

## 3.1.1 2017-1-20

- Fix HD wallet seed export

## 3.1.0 2017-1-18

- Add ability to import accounts by private key.
- Fixed bug that returned the wrong transaction hashes on private networks that had not implemented EIP 155 replay protection (like TestRPC).

## 3.0.1 2017-1-17

- Fixed bug that prevented eth.sign from working.
- Fix the displaying of transactions that have been submitted to the network in Transaction History

## 3.0.0 2017-1-16

- Fix seed word account generation (https://medium.com/metamask/metamask-3-migration-guide-914b79533cdd#.t4i1qmmsz).
- Fix Bug where you see a empty transaction flash by on the confirm transaction view.
- Create visible difference in transaction history between a approved but not yet included in a block transaction and a transaction who has been confirmed.
- Fix memory leak in RPC Cache
- Override RPC commands eth_syncing and web3_clientVersion
- Remove certain non-essential permissions from certain builds.
- Add a check for when a tx is included in a block.
- Fix bug where browser-solidity would sometimes warn of a contract creation error when there was none.
- Minor modifications to network display.
- Network now displays properly for pending transactions.
- Implement replay attack protections allowed by EIP 155.
- Fix bug where sometimes loading account data would fail by querying a future block.

## 2.14.1 2016-12-20

- Update Coinbase info. and increase the buy amount to $15
- Fixed ropsten transaction links
- Temporarily disable extension reload detection causing infinite reload bug.
- Implemented basic checking for valid RPC URIs.

## 2.14.0 2016-12-16

- Removed Morden testnet provider from provider menu.
- Add support for notices.
- Fix broken reload detection.
- Fix transaction forever cached-as-pending bug.

## 2.13.11 2016-11-23

- Add support for synchronous RPC method "eth_uninstallFilter".
- Forgotten password prompts now send users directly to seed word restoration.

## 2.13.10 2016-11-22

- Improve gas calculation logic.
- Default to Dapp-specified gas limits for transactions.
- Ropsten networks now properly point to the faucet when attempting to buy ether.
- Ropsten transactions now link to etherscan correctly.

## 2.13.9 2016-11-21

- Add support for the new, default Consortium Test Network.
- Fix bug that would cause MetaMask to occasionally lose its StreamProvider connection and drop requests.
- Fix bug that would cause the Custom RPC menu item to not appear when Localhost 8545 was selected.
- Point ropsten faucet button to actual faucet.
- Phase out ethereumjs-util from our encryptor module.

## 2.13.8 2016-11-16

- Show a warning when a transaction fails during simulation.
- Fix bug where 20% of gas estimate was not being added properly.
- Render error messages in confirmation screen more gracefully.

## 2.13.7 2016-11-8

- Fix bug where gas estimate would sometimes be very high.
- Increased our gas estimate from 100k gas to 20% of estimate.
- Fix github link on info page to point at current repository.

## 2.13.6 2016-10-26

- Add a check for improper Transaction data.
- Inject up to date version of web3.js
- Now nicknaming new accounts "Account #" instead of "Wallet #" for clarity.
- Fix bug where custom provider selection could show duplicate items.
- Fix bug where connecting to a local morden node would make two providers appear selected.
- Fix bug that was sometimes preventing transactions from being sent.

## 2.13.5 2016-10-18

- Increase default max gas to `100000` over the RPC's `estimateGas` response.
- Fix bug where slow-loading dapps would sometimes trigger infinite reload loops.

## 2.13.4 2016-10-17

- Add custom transaction fee field to send form.
- Fix bug where web3 was being injected into XML files.
- Fix bug where changing network would not reload current Dapps.

## 2.13.3 2016-10-4

- Fix bug where log queries were filtered out.
- Decreased vault confirmation button font size to help some Linux users who could not see it.
- Made popup a little taller because it would sometimes cut off buttons.
- Fix bug where long account lists would get scrunched instead of scrolling.
- Add legal information to relevant pages.
- Rename UI elements to be more consistent with one another.
- Updated Terms of Service and Usage.
- Prompt users to re-agree to the Terms of Service when they are updated.

## 2.13.2 2016-10-4

- Fix bug where chosen FIAT exchange rate does no persist when switching networks
- Fix additional parameters that made MetaMask sometimes receive errors from Parity.
- Fix bug where invalid transactions would still open the MetaMask popup.
- Removed hex prefix from private key export, to increase compatibility with Geth, MyEtherWallet, and Jaxx.

## 2.13.1 2016-09-23

- Fix a bug with estimating gas on Parity
- Show loading indication when selecting ShapeShift as purchasing method.

## 2.13.0 2016-09-18

- Add Parity compatibility, fixing Geth dependency issues.
- Add a link to the transaction in history that goes to https://metamask.github.io/eth-tx-viz
too help visualize transactions and to where they are going.
- Show "Buy Ether" button and warning on tx confirmation when sender balance is insufficient

## 2.12.1 2016-09-14

- Fixed bug where if you send a transaction from within MetaMask extension the
popup notification opens up.
- Fixed bug where some tx errors would block subsequent txs until the plugin was refreshed.

## 2.12.0 2016-09-14

- Add a QR button to the Account detail screen
- Fixed bug where opening MetaMask could close a non-metamask popup.
- Fixed memory leak that caused occasional crashes.

## 2.11.1 2016-09-12

- Fix bug that prevented caches from being cleared in Opera.

## 2.11.0 2016-09-12

- Fix bug where pending transactions from Test net (or other networks) show up In Main net.
- Add fiat conversion values to more views.
- On fresh install, open a new tab with the MetaMask Introduction video. Does not open on update.
- Block negative values from transactions.
- Fixed a memory leak.
- MetaMask logo now renders as super lightweight SVG, improving compatibility and performance.
- Now showing loading indication during vault unlocking, to clarify behavior for users who are experience slow unlocks.
- Now only initially creates one wallet when restoring a vault, to reduce some users' confusion.

## 2.10.2 2016-09-02

- Fix bug where notification popup would not display.

## 2.10.1 2016-09-02

- Fix bug where provider menu did not allow switching to custom network from a custom network.
- Sending a transaction from within MetaMask no longer triggers a popup.
- The ability to build without livereload features (such as for production) can be enabled with the gulp --disableLiveReload flag.
- Fix Ethereum JSON RPC Filters bug.

## 2.10.0 2016-08-29

- Changed transaction approval from notifications system to popup system.
- Add a back button to locked screen to allow restoring vault from seed words when password is forgotten.
- Forms now retain their values even when closing the popup and reopening it.
- Fixed a spelling error in provider menu.

## 2.9.2 2016-08-24

- Fixed shortcut bug from preventing installation.

## 2.9.1 2016-08-24

- Added static image as fallback for when WebGL isn't supported.
- Transaction history now has a hard limit.
- Added info link on account screen that visits Etherscan.
- Fixed bug where a message signing request would be lost if the vault was locked.
- Added shortcut to open MetaMask (Ctrl+Alt+M or Cmd+Opt/Alt+M)
- Prevent API calls in  tests.
- Fixed bug where sign message confirmation would sometimes render blank.

## 2.9.0 2016-08-22

- Added ShapeShift to the transaction history
- Added affiliate key to Shapeshift requests
- Added feature to reflect current conversion rates of current vault balance.
- Modify balance display logic.

## 2.8.0 2016-08-15

- Integrate ShapeShift
- Add a form for Coinbase to specify amount to buy
- Fix various typos.
- Make dapp-metamask connection more reliable
- Remove Ethereum Classic from provider menu.

## 2.7.3 2016-07-29

- Fix bug where changing an account would not update in a live Dapp.

## 2.7.2 2016-07-29

- Add Ethereum Classic to provider menu
- Fix bug where host store would fail to receive updates.

## 2.7.1 2016-07-27

- Fix bug where web3 would sometimes not be injected in time for the application.
- Fixed bug where sometimes when opening the plugin, it would not fully open until closing and re-opening.
- Got most functionality working within Firefox (still working on review process before it can be available).
- Fixed menu dropdown bug introduced in Chrome 52.

## 2.7.0 2016-07-21

- Added a Warning screen about storing ETH
- Add buy Button!
- MetaMask now throws descriptive errors when apps try to use synchronous web3 methods.
- Removed firefox-specific line in manifest.

## 2.6.2 2016-07-20

- Fixed bug that would prevent the plugin from reopening on the first try after receiving a new transaction while locked.
- Fixed bug that would render 0 ETH as a non-exact amount.

## 2.6.1 2016-07-13

- Fix tool tips on Eth balance to show the 6 decimals
- Fix rendering of recipient SVG in tx approval notification.
- New vaults now generate only one wallet instead of three.
- Bumped version of web3 provider engine.
- Fixed bug where some lowercase or uppercase addresses were not being recognized as valid.
- Fixed bug where gas cost was misestimated on the tx confirmation view.

## 2.6.0 2016-07-11

- Fix formatting of ETH balance
- Fix formatting of account details.
- Use web3 minified dist for faster inject times
- Fix issue where dropdowns were not in front of icons.
- Update transaction approval styles.
- Align failed and successful transaction history text.
- Fix issue where large domain names and large transaction values would misalign the transaction history.
- Abbreviate ether balances on transaction details to maintain formatting.
- General code cleanup.

## 2.5.0 2016-06-29

- Implement new account design.
- Added a network indicator mark in dropdown menu
- Added network name next to network indicator
- Add copy transaction hash button to completed transaction list items.
- Unify wording for transaction approve/reject options on notifications and the extension.
- Fix bug where confirmation view would be shown twice.

## 2.4.5 2016-06-29

- Fixed bug where MetaMask interfered with PDF loading.
- Moved switch account icon into menu bar.
- Changed status shapes to be a yellow warning sign for failure and ellipsis for pending transactions.
- Now enforce 20 character limit on wallet names.
- Wallet titles are now properly truncated in transaction confirmation.
- Fix formatting on terms & conditions page.
- Now enforce 30 character limit on wallet names.
- Fix out-of-place positioning of pending transaction badges on wallet list.
- Change network status icons to reflect current design.

## 2.4.4 2016-06-23

- Update web3-stream-provider for batch payload bug fix

## 2.4.3 2016-06-23

- Remove redundant network option buttons from settings page
- Switch out font family Transat for Montserrat

## 2.4.2 2016-06-22

- Change out export icon for key.
- Unify copy to clipboard icon
- Fixed eth.sign behavior.
- Fix behavior of batched outbound transactions.

## 2.4.0 2016-06-20

- Clean up UI.
- Remove nonfunctional QR code button.
- Make network loading indicator clickable to select accessible network.
- Show more characters of addresses when space permits.
- Fixed bug when signing messages under 64 hex characters long.
- Add disclaimer view with placeholder text for first time users.

## 2.3.1 2016-06-09

- Style up the info page
- Cache identicon images to optimize for long lists of transactions.
- Fix out of gas errors

## 2.3.0 2016-06-06

- Show network status in title bar
- Added seed word recovery to config screen.
- Clicking network status indicator now reveals a provider menu.

## 2.2.0 2016-06-02

- Redesigned init, vault create, vault restore and seed confirmation screens.
- Added pending transactions to transaction list on account screen.
- Clicking a pending transaction takes you back to the transaction approval screen.
- Update provider-engine to fix intermittent out of gas errors.

## 2.1.0 2016-05-26

- Added copy address button to account list.
- Fixed back button on confirm transaction screen.
- Add indication of pending transactions to account list screen.
- Fixed bug where error warning was sometimes not cleared on view transition.
- Updated eth-lightwallet to fix a critical security issue.

## 2.0.0 2016-05-23

- UI Overhaul per Vlad Todirut's designs.
- Replaced identicons with jazzicons.
- Fixed glitchy transitions.
- Added support for capitalization-based address checksums.
- Send value is no longer limited by javascript number precision, and is always in ETH.
- Added ability to generate new accounts.
- Added ability to locally nickname accounts.

## 1.8.4 2016-05-13

- Point rpc servers to https endpoints.

## 1.8.3 2016-05-12

- Bumped web3 to 0.6.0
- Really fixed `eth_syncing` method response.

## 1.8.2 2016-05-11

- Fixed bug where send view would not load correctly the first time it was visited per account.
- Migrated all users to new scalable backend.
- Fixed `eth_syncing` method response.

## 1.8.1 2016-05-10

- Initial usage of scalable blockchain backend.
- Made official providers more easily configurable for us internally.

## 1.8.0 2016-05-10

- Add support for calls to `eth.sign`.
- Moved account exporting within subview of the account detail view.
- Added buttons to the account export process.
- Improved visual appearance of account detail transition where button heights would change.
- Restored back button to account detail view.
- Show transaction list always, never collapsed.
- Changing provider now reloads current Dapps
- Improved appearance of transaction list in account detail view.

## 1.7.0 2016-04-29

- Account detail view is now the primary view.
- The account detail view now has a "Change acct" button which shows the account list.
- Clicking accounts in the account list now both selects that account and displays that account's detail view.
- Selected account is now persisted between sessions, so the current account stays selected.
- Account icons are now "identicons" (deterministically generated from the address).
- Fixed link to Slack channel.
- Added a context guard for "define" to avoid UMD's exporting themselves to the wrong module system, fixing interference with some websites.
- Transaction list now only shows transactions for the current account.
- Transaction list now only shows transactions for the current network (mainnet, testnet, testrpc).
- Fixed transaction links to etherscan blockchain explorer.
- Fixed some UI transitions that had weird behavior.

## 1.6.0 2016-04-22

- Pending transactions are now persisted to localStorage and resume even after browser is closed.
- Completed transactions are now persisted and can be displayed via UI.
- Added transaction list to account detail view.
- Fix bug on config screen where current RPC address was always displayed wrong.
- Fixed bug where entering a decimal value when sending a transaction would result in sending the wrong amount.
- Add save button to custom RPC input field.
- Add quick-select button for RPC on `localhost:8545`.
- Improve config view styling.
- Users have been migrated from old test-net RPC to a newer test-net RPC.

## 1.5.1 2016-04-15

- Corrected text above account list. Selected account is visible to all sites, not just the current domain.
- Merged the UI codebase into the main plugin codebase for simpler maintenance.
- Fix Ether display rounding error. Now rendering to four decimal points.
- Fix some inpage synchronous methods
- Change account rendering to show four decimals and a leading zero.

## 1.5.0 2016-04-13

- Added ability to send ether.
- Fixed bugs related to using Javascript numbers, which lacked appropriate precision.
- Replaced Etherscan main-net provider with our own production RPC.

## 1.4.0 2016-04-08

- Removed extra entropy text field for simplified vault creation.
- Now supports exporting an account's private key.
- Unified button and input styles across the app.
- Removed some non-working placeholder UI until it works.
- Fix popup's web3 stream provider
- Temporarily deactivated fauceting indication because it would activate when restoring an empty account.

## 1.3.2 2016-04-04

 - When unlocking, first account is auto-selected.
 - When creating a first vault on the test-net, the first account is auto-funded.
 - Fixed some styling issues.

## 1.0.1-1.3.1

Many changes not logged. Hopefully beginning to log consistently now!

## 1.0.0

Made seed word restoring BIP44 compatible.

## 0.14.0

Added the ability to restore accounts from seed words.

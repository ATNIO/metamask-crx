const MAINET_RPC_URL = 'https://mainnet.infura.io/metamask'
const TESTNET_RPC_URL = 'https://ropsten.infura.io/metamask'
const KOVAN_RPC_URL = 'https://kovan.infura.io/metamask'
const CONSORTIUM_RPC_URL = 'http://35.189.163.25:8545'
const DEFAULT_RPC_URL = CONSORTIUM_RPC_URL

global.METAMASK_DEBUG = 'GULP_METAMASK_DEBUG'

module.exports = {
  network: {
    default: DEFAULT_RPC_URL,
    mainnet: MAINET_RPC_URL,
    testnet: CONSORTIUM_RPC_URL,
    morden: TESTNET_RPC_URL,
    kovan: KOVAN_RPC_URL,
  },
}

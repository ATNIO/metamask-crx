module.exports = function (address, network) {
  const net = parseInt(network)
  let link
  switch (net) {
    case 1: // main net
      link = `http://35.229.221.95:5000/account/${address}`
      break
    case 2: // morden test net
      link = `http://morden.etherscan.io/address/${address}`
      break
    case 3: // ropsten test net
      link = `http://ropsten.etherscan.io/address/${address}`
      break
    case 42: // kovan test net
      link = `http://kovan.etherscan.io/address/${address}`
      break
    default:
      link = ''
      break
  }

  return link
}

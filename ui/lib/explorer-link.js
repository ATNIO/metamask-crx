module.exports = function (hash, network) {
  const net = parseInt(network)
  let prefix
  switch (net) {
    case 1: // main net
      prefix = ''
      break
    case 3: // ropsten test net
      prefix = 'ropsten.'
      break
    case 42: // kovan test net
      prefix = 'kovan.'
      break
    default:
      prefix = ''
  }
  return `http://35.229.221.95:5000/transaction/${hash}`
}

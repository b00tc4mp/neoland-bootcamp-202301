function validateAddress(address) {
    if (typeof address !== 'string') throw new TypeError('address is not a string')
}

module.exports = validateAddress
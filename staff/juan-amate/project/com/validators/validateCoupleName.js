function validateCoupleName(coupleName) {
    if (typeof coupleName !== 'string') throw new TypeError('coupleName is not a string')
}

module.exports = validateCoupleName
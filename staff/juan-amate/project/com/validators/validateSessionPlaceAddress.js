function validateSessionPlaceAddress(sessionPlaceAddress) {
    if (typeof sessionPlaceAddress !== 'string') throw new TypeError('sessionPlaceAddress is not a string')
}

module.exports = validateSessionPlaceAddress
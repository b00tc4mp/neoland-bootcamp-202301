function validateSessionPlaceZipCode(sessionPlaceZipCode) {
    if (typeof sessionPlaceZipCode !== 'string') throw new TypeError('sessionPlaceZipCode is not a string')
}

module.exports = validateSessionPlaceZipCode
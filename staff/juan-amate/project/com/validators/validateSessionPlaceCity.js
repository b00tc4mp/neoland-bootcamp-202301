function validateSessionPlaceCity(sessionPlaceCity) {
    if (typeof sessionPlaceCity !== 'string') throw new TypeError('sessionPlaceCity is not a string')
}

module.exports = validateSessionPlaceCity
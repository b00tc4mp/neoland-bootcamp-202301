function validateSessionPlaceDescription(sessionPlaceDescription) {
    if (typeof sessionPlaceDescription !== 'string') throw new TypeError('sessionPlaceDescription is not a string')
}

module.exports = validateSessionPlaceDescription
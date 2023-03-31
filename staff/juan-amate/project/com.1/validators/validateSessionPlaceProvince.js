function validateSessionPlaceProvince(sessionPlaceProvince) {
    if (typeof sessionPlaceProvince !== 'string') throw new TypeError('sessionPlaceProvince is not a string')
}

module.exports = validateSessionPlaceProvince
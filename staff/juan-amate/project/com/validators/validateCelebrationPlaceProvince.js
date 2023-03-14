function validateCelebrationPlaceProvince(celebrationPlaceProvince) {
    if (typeof celebrationPlaceProvince !== 'string') throw new TypeError('celebrationPlaceProvince is not a string')
}

module.exports = validateCelebrationPlaceProvince
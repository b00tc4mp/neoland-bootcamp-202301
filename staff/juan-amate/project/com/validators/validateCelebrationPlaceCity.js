function validateCelebrationPlaceCity(celebrationPlaceCity) {
    if (typeof celebrationPlaceCity !== 'string') throw new TypeError('celebrationPlaceCity is not a string')
}

module.exports = validateCelebrationPlaceCity
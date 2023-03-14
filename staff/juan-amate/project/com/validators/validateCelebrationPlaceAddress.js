function validateCelebrationPlaceAddress(celebrationPlaceAddress) {
    if (typeof celebrationPlaceAddress !== 'string') throw new TypeError('celebrationPlaceAddress is not a string')
}

module.exports = validateCelebrationPlaceAddress
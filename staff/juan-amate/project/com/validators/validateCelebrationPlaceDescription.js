function validateCelebrationPlaceDescription(celebrationPlaceDescription) {
    if (typeof celebrationPlaceDescription !== 'string') throw new TypeError('celebrationPlaceDescription is not a string')
}

module.exports = validateCelebrationPlaceDescription
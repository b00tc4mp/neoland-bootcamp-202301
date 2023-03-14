function validateCelebrationPlaceZipCode(celebrationPlaceZipCode) {
    if (typeof celebrationPlaceZipCode !== 'string') throw new TypeError('celebrationPlaceZipCode is not a string')
}

module.exports = validateCelebrationPlaceZipCode
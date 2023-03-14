function validateCeremonyPlaceDescription(ceremonyPlaceDescription) {
    if (typeof ceremonyPlaceDescription !== 'string') throw new TypeError('ceremonyPlaceDescription is not a string')
}

module.exports = validateCeremonyPlaceDescription
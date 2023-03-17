function validateCeremonyPlaceCity(ceremonyPlaceCity) {
    if (typeof ceremonyPlaceCity !== 'string') throw new TypeError('ceremonyPlaceCity is not a string')
}

module.exports = validateCeremonyPlaceCity
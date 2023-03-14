function validateCeremonyPlaceAddress(ceremonyPlaceAddress) {
    if (typeof ceremonyPlaceAddress !== 'string') throw new TypeError('ceremonyPlaceAddress is not a string')
}

module.exports = validateCeremonyPlaceAddress
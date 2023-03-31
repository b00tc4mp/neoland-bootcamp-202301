function validateCeremonyPlaceZipCode(CeremonyPlaceZipCode) {
    if (typeof CeremonyPlaceZipCode !== 'string') throw new TypeError('CeremonyPlaceZipCode is not a string')
}

module.exports = validateCeremonyPlaceZipCode
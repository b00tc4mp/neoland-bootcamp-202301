function validateCeremonyPlaceProvince(CeremonyPlaceProvince) {
    if (typeof CeremonyPlaceProvince !== 'string') throw new TypeError('CeremonyPlaceProvince is not a string')
}

module.exports = validateCeremonyPlaceProvince
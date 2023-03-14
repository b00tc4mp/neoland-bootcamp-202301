function validateCouplePreparationPlaceZipCode(couplePreparationPlaceZipCode) {
    if (typeof couplePreparationPlaceZipCode !== 'string') throw new TypeError('couplePreparationPlaceZipCode is not a string')
}

module.exports = validateCouplePreparationPlaceZipCode
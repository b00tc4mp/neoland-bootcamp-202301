function validateCouplePreparationPlaceAddress(couplePreparationPlaceAddress) {
    if (typeof couplePreparationPlaceAddress !== 'string') throw new TypeError('couplePreparationPlaceAddress is not a string')
}

module.exports = validateCouplePreparationPlaceAddress
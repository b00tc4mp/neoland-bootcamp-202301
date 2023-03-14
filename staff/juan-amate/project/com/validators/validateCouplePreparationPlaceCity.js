function validateCouplePreparationPlaceCity(couplePreparationPlaceCity) {
    if (typeof couplePreparationPlaceCity !== 'string') throw new TypeError('couplePreparationPlaceCity is not a string')
}

module.exports = validateCouplePreparationPlaceCity
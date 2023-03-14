function validateCouplePreparationPlaceDescription(couplePreparationPlaceDescription) {
    if (typeof couplePreparationPlaceDescription !== 'string') throw new TypeError('couplePreparationPlaceDescription is not a string')
}

module.exports = validateCouplePreparationPlaceDescription
function validateCouplePreparationPlaceProvince(couplePreparationPlaceProvince) {
    if (typeof couplePreparationPlaceProvince !== 'string') throw new TypeError('couplePreparationPlaceProvince is not a string')
}

module.exports = validateCouplePreparationPlaceProvince
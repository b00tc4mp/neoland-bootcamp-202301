function validatePreparationPlaceProvince(preparationPlaceProvince) {
    if (typeof preparationPlaceProvince !== 'string') throw new TypeError('preparationPlaceProvince is not a string')
}

module.exports = validatePreparationPlaceProvince
function validatePreparationPlaceCity(preparationPlaceCity) {
    if (typeof preparationPlaceCity !== 'string') throw new TypeError('preparationPlaceCity is not a string')
}

module.exports = validatePreparationPlaceCity
function validatePreparationPlaceAddress(preparationPlaceAddress) {
    if (typeof preparationPlaceAddress !== 'string') throw new TypeError('preparationPlaceAddress is not a string')
}

module.exports = validatePreparationPlaceAddress
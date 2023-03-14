function validatePreparationPlaceZipCode(preparationPlaceZipCode) {
    if (typeof preparationPlaceZipCode !== 'string') throw new TypeError('preparationPlaceZipCode is not a string')
}

module.exports = validatePreparationPlaceZipCode
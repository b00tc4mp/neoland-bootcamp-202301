function validatePreparationPlaceDescription(preparationPlaceDescription) {
    if (typeof preparationPlaceDescription !== 'string') throw new TypeError('preparationPlaceDescription is not a string')
}

module.exports = validatePreparationPlaceDescription
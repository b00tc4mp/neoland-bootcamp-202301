function validateExtraPhotographerServiceSelected(extraPhotographerServiceSelected) {
    if (typeof extraPhotographerServiceSelected !== 'boolean') throw new TypeError('extraPhotographerServiceSelected is not a boolean')
}

module.exports = validateExtraPhotographerServiceSelected
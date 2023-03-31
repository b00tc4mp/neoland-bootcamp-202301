function validatePhotographer(photographer) {
    if (typeof photographer !== 'string') throw new TypeError('photographer is not a string')
}

module.exports = validatePhotographer
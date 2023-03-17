function validatePreWeddingServiceSelected(preWeddingServiceSelected) {
    if (typeof preWeddingServiceSelected !== 'boolean') throw new TypeError('preWeddingServiceSelected is not a boolean')
}

module.exports = validatePreWeddingServiceSelected
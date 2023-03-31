function validatePostWeddingServiceSelected(postWeddingServiceSelected) {
    if (typeof postWeddingServiceSelected !== 'boolean') throw new TypeError('postWeddingServiceSelected is not a boolean')
}

module.exports = validatePostWeddingServiceSelected
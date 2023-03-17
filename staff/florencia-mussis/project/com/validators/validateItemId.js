function validateItemId(itemId) {
    if (typeof itemId !== 'string') throw new TypeError('itemId is not a string')
}

module.exports = validateItemId
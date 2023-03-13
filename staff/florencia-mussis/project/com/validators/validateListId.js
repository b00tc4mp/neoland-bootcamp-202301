function validateListId(listId) {
    if (typeof listId !== 'string') throw new TypeError('listId is not a string')
}

module.exports = validateListId
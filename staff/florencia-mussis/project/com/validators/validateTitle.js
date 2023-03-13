function validateTitle(title) {
    if (typeof title !== 'string') throw new TypeError('Title is not a string')
}

module.exports = validateTitle
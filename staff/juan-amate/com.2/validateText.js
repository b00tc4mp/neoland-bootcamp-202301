function validateText(text) {
    if (typeof text !== 'string') throw new Error('text is not a string')
}

module.exports = validateText
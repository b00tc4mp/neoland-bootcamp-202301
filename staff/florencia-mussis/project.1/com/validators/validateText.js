function validateText(text) {
    if (typeof text !== 'string') throw new TypeError('Text is not a string')
}

module.exports = validateText
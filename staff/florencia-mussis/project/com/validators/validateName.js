function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('Name is not a string')
}

module.exports = validateName
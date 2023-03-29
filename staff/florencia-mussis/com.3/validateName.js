function validateName(name) {
    if (typeof name !== 'string') throw new Error('name is not a string')
}

module.exports = validateName
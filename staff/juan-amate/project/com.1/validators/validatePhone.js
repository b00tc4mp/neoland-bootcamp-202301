function validatePhone(phone) {
    if (typeof phone !== 'string') throw new TypeError('phone is not a string')
}

module.exports = validatePhone
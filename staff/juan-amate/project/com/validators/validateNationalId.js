function validateNationalId(nationalId) {
    if (typeof nationalId !== 'string') throw new TypeError('nationalId is not a string')
}

module.exports = validateNationalId
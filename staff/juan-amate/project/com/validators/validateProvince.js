function validateProvince(province) {
    if (typeof province !== 'string') throw new TypeError('province is not a string')
}

module.exports = validateProvince
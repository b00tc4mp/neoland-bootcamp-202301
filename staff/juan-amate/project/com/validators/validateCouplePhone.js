function validateCouplePhone(couplePhone) {
    if (typeof couplePhone !== 'string') throw new TypeError('couplePhone is not a string')
}

module.exports = validateCouplePhone
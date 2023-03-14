function validateCoupleId(coupleId) {
    if (typeof coupleId !== 'string') throw new TypeError('coupleId is not a string')
}

module.exports = validateCoupleId
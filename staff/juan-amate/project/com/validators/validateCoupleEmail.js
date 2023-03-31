const isEmail = require('../checkers/isEmail')
const FormatError = require('../errors/FormatError')

function validateCoupleEmail(coupleEmail) {
    if (typeof coupleEmail !== 'string') throw new TypeError('coupleEmail is not a string')
    if (!isEmail(coupleEmail)) throw new FormatError('coupleEmail is not valid')
}

module.exports = validateCoupleEmail
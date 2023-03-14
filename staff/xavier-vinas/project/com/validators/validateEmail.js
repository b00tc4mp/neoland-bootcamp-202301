const FormatError = require('../errors/FormatError')
const isEmail = require('../checkers/isEmail')

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!isEmail(email)) throw new FormatError('email is not valid')
}

module.exports = validateEmail
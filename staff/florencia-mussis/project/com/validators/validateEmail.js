const isEmail = require('../checkers/isEmail')
const FormatError = require('../errors/FormatError')

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('E-mail is not a string')
    if (!isEmail(email)) throw new FormatError('E-mail is not valid')
}

module.exports = validateEmail
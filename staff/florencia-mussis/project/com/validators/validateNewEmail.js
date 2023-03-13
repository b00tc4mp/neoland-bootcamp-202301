const FormatError = require ('../errors/FormatError')
const isEmail = require('../checkers/isEmail')

function validateNewEmail(newEmail) {
    if (typeof newEmail !== 'string') throw new TypeError('New e-mail is not a string')
    if (!isEmail(newEmail)) throw new FormatError('New e-mail is not valid')
}

module.exports = validateNewEmail
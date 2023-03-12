const isEmail = require('../checkers/isEmail')
const FormatError = require('../errors/FormatError')

function validateNewEmail(newEmail) {
    if (typeof newEmail !== 'string') throw new TypeError('new email is not a string')
    if (!isEmail(newEmail)) throw new FormatError('new email is not valid')
}

module.exports = validateNewEmail
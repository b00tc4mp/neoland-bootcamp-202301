const FormatError = require ('../errors/FormatError')
const isEmail = require('../checkers/isEmail')

function validateNewEmail(newEmail) {
    if (typeof newEmail !== 'string') throw new TypeError('newEmail is not a string')
    if (!isEmail(newEmail)) throw new FormatError('newEmail is not valid')
}

module.exports = validateNewEmail
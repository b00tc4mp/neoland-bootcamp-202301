const isEmail = require('../checkers/isEmail')

function validateNewEmail(newEmail) {
    if (typeof newEmail !== 'string') throw new Error('newEmail is not a string')
    if (!isEmail(newEmail)) throw new Error('newEmail is not valid')
}

module.exports = validateNewEmail

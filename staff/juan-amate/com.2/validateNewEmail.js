const isEmail = require('./isEmail')

function validateNewEmail(newEmail) {
    if (typeof newEmail !== 'string') throw new Error('new email is not a string')
    if (!isEmail(newEmail)) throw new Error('new email is not valid')
}

module.exports = validateNewEmail
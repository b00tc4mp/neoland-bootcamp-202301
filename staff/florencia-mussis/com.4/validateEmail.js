const isEmail = require('./isEmail')

function validateEmail(email) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (!isEmail(email)) throw new Error('email is not valid')
}

module.exports = validateEmail
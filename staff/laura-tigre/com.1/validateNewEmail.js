const isEmail = require('./isEmail')

function validateNewEmail(newEmail){

    if (typeof newEmail !== 'string') throw new Error('newEmail is not a string')
    if (!isEmail(newEmail)) throw new Error('newEmail is not an email')
}

module.exports= validateNewEmail
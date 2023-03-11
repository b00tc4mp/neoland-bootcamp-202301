function validateNewPassword(newPassword) {
    if (typeof newPassword !== 'string') throw new TypeError('newPassword is not a string')
    if (newPassword.length < 8) throw new RangeError('newPassword is shorter than 8 characters')
}

module.exports = validateNewPassword
function validateNewPassword(newPassword) {
    if (typeof newPassword !== 'string') throw new TypeError('New password is not a string')
    if (newPassword.length < 8) throw new RangeError('New password is shorter than 8 characters')
}

module.exports = validateNewPassword
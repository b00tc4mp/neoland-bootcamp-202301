function validateNewPassword(newPassword) {
    if (typeof newPassword !== 'string') throw new Error('new password is not a string')
    if (newPassword.length < 8) throw new Error('new password is shorter than 8 characters')
}

module.exports = validateNewPassword
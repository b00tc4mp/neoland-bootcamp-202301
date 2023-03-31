function validateNewPassword(newPassword) {
    if (typeof newPassword !== 'string') throw new Error('newPassword is not a string')
    if (newPassword.length < 8) throw new Error('newPassword is shorter than 8 characters')
}

module.exports = validateNewPassword
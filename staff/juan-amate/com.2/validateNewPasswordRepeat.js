function validateNewPasswordRepeat(newPasswordRepeat) {
    if (typeof newPasswordRepeat !== 'string') throw new Error('new password repeat is not a string')
    if (newPasswordRepeat.length < 8) throw new Error('new password repeat is shorter than 8 characters')
}

module.exports = validateNewPasswordRepeat
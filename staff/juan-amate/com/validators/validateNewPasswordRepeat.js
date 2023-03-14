function validateNewPasswordRepeat(newPasswordRepeat) {
    if (typeof newPasswordRepeat !== 'string') throw new TypeError('new password repeat is not a string')
    if (newPasswordRepeat.length < 8) throw new RangeError('new password repeat is shorter than 8 characters')
}

module.exports = validateNewPasswordRepeat
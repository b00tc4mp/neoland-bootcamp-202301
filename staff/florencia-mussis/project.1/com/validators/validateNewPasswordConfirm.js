function validateNewPasswordConfirm(newPasswordConfirm) {
    if (typeof newPasswordConfirm !== 'string') throw new TypeError('New password confirm is not a string')
    if (newPasswordConfirm.length < 8) throw new RangeError('New password confirm is shorter than 8 characters')
}

module.exports = validateNewPasswordConfirm
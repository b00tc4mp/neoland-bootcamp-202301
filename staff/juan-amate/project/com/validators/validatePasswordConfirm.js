function validatePasswordConfirm(passwordConfirm) {
    if (typeof passwordConfirm !== 'string') throw new TypeError('password confirm is not a string')
    if (passwordConfirm.length < 8) throw new RangeError('password confirm is shorter than 8 characters')
}

module.exports = validatePasswordConfirm
const { User } = require('../data/models')
const { validateUserId, validatePassword, validateNewPassword, validateNewPasswordRepeat, CoherenceError, ExistenceError, AuthError } = require('com')

function updateUserPassword(userId, password, newPassword, newPasswordRepeat) {
    validateUserId(userId)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordRepeat(newPasswordRepeat)

    if (password === newPassword) throw new CoherenceError('current password and new password are equal')

    if (newPassword !== newPasswordRepeat) throw new CoherenceError('new password and new password repeat do not match')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (user.password !== password) throw new AuthError('wrong credentials')

            user.password = newPassword

            return user.save()
        })
}

module.exports = updateUserPassword
const { validateUserId, validatePassword, validateNewPassword, validateNewPasswordConfirm, CoherenceError, AuthError , ExistenceError } = require('com')
const { User } = require('../data/models')

function updateUserPassword(userId, password, newPassword, newPasswordConfirm) {
    validateUserId(userId)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordConfirm(newPasswordConfirm)

    if (password === newPassword) throw new CoherenceError('current password and new password are equal')

    if (newPassword !== newPasswordConfirm) throw new CoherenceError('new password and new password repeat do not match')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (user.password !== password) throw new AuthError('wrong credentials')

            user.password = newPassword

            return user.save()
        })
}

module.exports = updateUserPassword
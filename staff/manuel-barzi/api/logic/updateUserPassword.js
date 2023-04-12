const { validateUserId, validatePassword, validateNewPassword, validateNewPasswordConfirm, CoherenceError, ExistenceError, AuthError } = require('com')
const { User } = require('../data/models')
const bcrypt = require('bcryptjs')

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

            return bcrypt.compare(password, user.password)
                .then(match => {
                    if (!match) throw new AuthError('wrong credentials')

                    return bcrypt.hash(newPassword, 10)
                })
                .then(hash => {
                    user.password = hash

                    return user.save()
                })
        })
}

module.exports = updateUserPassword
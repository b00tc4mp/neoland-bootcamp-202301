const { validateUserId, validatePassword, validateNewPassword, validateNewPasswordRepeat } = require('com')
const { User } = require('../data/models')

function updateUserPassword(userId, password, newPassword, newPasswordRepeat) {
    validateUserId(userId)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordRepeat(newPasswordRepeat)

    if (password === newPassword) throw new Error('current password and new password are equal')

    if (newPassword !== newPasswordRepeat) throw new Error('new password and new password repeat do not match')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            if (user.password !== password) throw new Error('wrong credentials')

            user.password = newPassword

            return user.save()
        })
}

module.exports = updateUserPassword
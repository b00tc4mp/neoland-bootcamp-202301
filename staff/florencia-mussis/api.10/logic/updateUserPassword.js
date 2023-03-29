const { validateUserId, validatePassword, validateNewPassword, validateNewPasswordConfirm } = require('com')
const { User } = require('../data/models')

function updateUserPassword(userId, password, newPassword, newPasswordConfirm) {
    validateUserId(userId)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordConfirm(newPasswordConfirm)
   
    if (password === newPassword) throw new Error('current password and new password are equal')

    if (newPassword !== newPasswordConfirm) throw new Error('new password and new password repeat do not match')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            
            if (user.password !== password) throw new Error ('wrong credentials')

            user.password = newPassword

            return user.save()
        })
}

module.exports = updateUserPassword
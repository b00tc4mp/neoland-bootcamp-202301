const { validateUserId, validatePassword, validateNewPassword, validateNewPasswordConfirm, CoherenceError, ExistenceError, AuthError } = require('com')
const { User } = require('../data/models')

/**
 * Updates the user password
 * 
 * @param {string} userId The user id of the user 
 * @param {string} password The password of the user
 * @param {string} newPassword The new password of the user
 * @param {string} newPasswordConfirm The new password confirm of the user
 */
function updateUserPassword(userId, password, newPassword, newPasswordConfirm) {
    validateUserId(userId)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordConfirm(newPasswordConfirm)

    if (password === newPassword) throw new CoherenceError('Current password and new password are equal')

    if (newPassword !== newPasswordConfirm) throw new CoherenceError('New password and new password repeat do not match')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            if (user.password !== password) throw new AuthError('Wrong credentials')

            user.password = newPassword

            return user.save()
        })
}

module.exports = updateUserPassword
const { validateUserId, validateNewEmail, validatePassword, ExistenceError, AuthError } = require('com')
const { User } = require('../data/models')

/**
 * Updates the user email
 * 
 * @param {string} userId The user id of the user 
 * @param {string} newEmail The new email of the user
 * @param {string} password The password of the user
 */
function updateUserEmail(userId, newEmail, password) {
    validateUserId(userId)
    validateNewEmail(newEmail)
    validatePassword(password)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            if (user.password !== password) throw new AuthError('Wrong credentials')

            user.email = newEmail

            return user.save()
        })
}

module.exports = updateUserEmail
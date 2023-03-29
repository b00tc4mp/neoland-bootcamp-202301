const { User } = require('../data/models')
const { validateUserId, validateNewEmail, validatePassword, ExistenceError, AuthError } = require('com')

/**
 * Update a user´s email
 * 
 * @param {string} userId The id of the user to update
 * @param {string} newEmail The new email of the user
 * @param {string} password The password of the user
 * @returns 
 */
function updateUserEmail(userId, newEmail, password) {
    validateUserId(userId)
    validateNewEmail(newEmail)
    validatePassword(password)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (user.password !== password) throw new AuthError('wrong credentials')

            user.email = newEmail

            return user.save()
        })
}

module.exports = updateUserEmail
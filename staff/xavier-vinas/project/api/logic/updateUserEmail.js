
const { validateUserId, validateNewEmail, validatePassword, MissingError, AuthError } = require('../../com')
const { User } = require('../data/models')
/**
 * 
 * @param {string} userId The userId the user belongs
 * @param {number} newEmail the new email the user belongs
 * @param {number} password the  password the user belongs
 * @returns 
 */

function updateUserEmail(userId, newEmail, password) {
    validateUserId(userId)
    validateNewEmail(newEmail)
    validatePassword(password)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new MissingError(`user with id ${userId} not found`)

            if (user.password !== password) throw new AuthError('wrong credentials')

            user.email = newEmail

            return user.save()
        })
}

module.exports = updateUserEmail
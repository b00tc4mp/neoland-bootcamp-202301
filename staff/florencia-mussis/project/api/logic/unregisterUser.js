const { Types: { ObjectId } } = require('mongoose')
const { validateUserId, validatePassword, ExistenceError, AuthError } = require('com')
const { User, List } = require('../data/models')

/**
 * Unregisters a user 
 * 
 * @param {string} userId The userId of the user 
 * @param {string} password The user's password
 */
function unregisterUser(userId, password) {
    validateUserId(userId)
    validatePassword(password)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            if (user.password !== password) throw new AuthError('Wrong credentials')

            return User.deleteOne({ _id: new ObjectId(userId) })

                .then(() => {
                    return List.deleteMany({ "user": userId })
                })
        })
}

module.exports = unregisterUser
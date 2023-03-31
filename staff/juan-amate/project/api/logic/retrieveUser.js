const { validateUserId, ExistenceError } = require('com')
const { User } = require('../data/models')

/**
 * Retrieve a user by id
 * 
 * @param {string} userId The id of the user to retrieve
 * @returns 
 */

function retrieveUser(userId) {
    validateUserId(userId)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            // sanitize

            delete user._id
            delete user.password
            delete user.__v

            return user
        })
}

module.exports = retrieveUser
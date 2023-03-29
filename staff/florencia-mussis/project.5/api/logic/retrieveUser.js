const { validateUserId, ExistenceError } = require('com')
const { User } = require('../data/models')

/**
 * Retrieves a user 
 * 
 * @param {string} userId The user id
 */
function retrieveUser(userId) {
    validateUserId(userId)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)
            user.id = user._id.toString()
            delete user._id
            delete user.password
            delete user.__v


            return user
        })
}

module.exports = retrieveUser
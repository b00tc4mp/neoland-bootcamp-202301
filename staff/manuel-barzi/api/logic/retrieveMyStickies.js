const { Types: { ObjectId } } = require('mongoose')
const { validateUserId } = require('com')
const { User, Sticky } = require('../data/models')

/**
 * Retrieves the stickies that belong to the specified user (email)
 * 
 * @param {string} userId The userId of the user to retrieve the stickies from
 */
function retrieveMyStickies(userId) {
    validateUserId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Sticky.find({ user: new ObjectId(userId) })
        })
}

module.exports = retrieveMyStickies
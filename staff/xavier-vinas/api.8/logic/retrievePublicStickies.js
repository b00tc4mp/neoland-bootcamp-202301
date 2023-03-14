const { validateUserId } = require('com')
const { User, Sticky } = require('../data/models')

/**
 * Retrieves the public stickies from all users that publish them
 * 
 * @param {string} userId The user id that requests the public stickies
 */
function retrievePublicStickies(userId) {
    validateUserId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Sticky.find({ visibility: 'public' })
        })
}

module.exports = retrievePublicStickies
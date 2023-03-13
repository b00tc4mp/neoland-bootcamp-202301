const { User, Sticky } = require('../data/models')
const { validateUserId } = require('com')

function retrieveMyStickies(userId) {
    validateUserId(userId)

    return User.findById((userId))
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Sticky.find({ user: userId })
        })
}
module.exports = retrieveMyStickies
const { validateUserId } = require('com')
const { User } = require('../data/models')

function retrieveUser(userId) {
    validateUserId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            // sanitization
            delete user._doc._id
            delete user._doc.password
            delete user._doc.__v

            return user
        })
}

module.exports = retrieveUser
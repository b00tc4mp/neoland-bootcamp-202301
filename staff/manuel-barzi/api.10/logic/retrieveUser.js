const { validateUserId, ExistenceError } = require('com')
const { User } = require('../data/models')

function retrieveUser(userId) {
    validateUserId(userId)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            // sanitize

            delete user._id
            delete user.password
            delete user.__v

            // TODO improve logic to return user info (not favs, neither other things)
            // delete user.favs

            return user
        })
}

module.exports = retrieveUser
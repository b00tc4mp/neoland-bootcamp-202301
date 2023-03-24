const { validatePhotographer, ExistenceError } = require('com')
const { User } = require('../data/models')

function retrievePhotographer(userPhotographer) {
    validatePhotographer(userPhotographer)

    return User.findOne({ photographer })
        .then(user => {
            if (!user) throw new ExistenceError(`photographer with email ${userPhotographer} not found`)

            delete user._id
            delete user.password
            delete user.__v

            return user
        })
}

module.exports = retrievePhotographer
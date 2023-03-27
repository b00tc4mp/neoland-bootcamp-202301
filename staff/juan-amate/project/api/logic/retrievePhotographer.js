const { validatePhotographer, ExistenceError } = require('com')
const { User } = require('../data/models')

function retrievePhotographer(photographerEmail) {
    validatePhotographer(photographerEmail)

    return User.findOne({ email: photographerEmail })
        .then(user => {
            if (!user) throw new ExistenceError(`photographer with email ${photographerEmail} not found`)

            delete user._id
            delete user.password
            delete user.__v

            return user
        })
}

module.exports = retrievePhotographer
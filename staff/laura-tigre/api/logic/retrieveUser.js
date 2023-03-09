const { validateUserId, ExistenceError} = require('com')
const { User } = require('../data/models')

function retrieveUser(userId) {
    validateUserId(userId)
    

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            delete user._id
            delete user.password
            delete user.__v
            delete user.favs

            return user

        })


}

module.exports = retrieveUser

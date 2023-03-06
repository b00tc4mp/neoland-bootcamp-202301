const { validateUserId } = require('com')
const { User } = require('../data/models')


function retrieveUser(userId) {
    validateUserId(userId)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            
            //sanitization
            delete user._id
            delete user.password
            delete user.__v

            return user
        })
}

module.exports = retrieveUser
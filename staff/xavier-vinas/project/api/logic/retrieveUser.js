const { validateUserId, ExistenceError } = require('../../com')
const { User } = require("../data/models")
/**
 * 
 * @param {string } userId The userId the user belongs
 * @returns 
 */



function retrieveUser(userId) {
    validateUserId(userId)

    return User.findById(userId).lean()

        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            // sanitization
            delete user._id
            delete user.password
            delete user.__v
         



            return user
        })
}

module.exports = retrieveUser
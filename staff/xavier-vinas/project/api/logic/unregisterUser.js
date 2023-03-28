const { Types: { ObjectId } } = require('mongoose')
const { validateUserId, validatePassword, ExistenceError, AuthError } = require('com')
const { User } = require('../data/models')
/**
 * 
 * @param {string} userId The userId the user belongs
 * @param {number} password  the password the user belongs
 * @returns 
 */


function unregisterUser(userId, password) {
    validateUserId(userId)
    validatePassword(password)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (user.password !== password) throw new AuthError('wrong credentials')

            return User.deleteOne({ _id: new ObjectId(userId) })
        })
       
}

module.exports = unregisterUser
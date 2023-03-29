const { validateEmail, validatePassword, ExistenceError, AuthError } = require('com')
const { User } = require('../data/models')

/**
 * Authenticate a user
 * 
 * @param {string} email The email of the user
 * @param {string} password The password of the user
 * @returns 
 */

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email }).lean()
        .then(user => {
            if (!user) throw new ExistenceError('user not found')

            if (user.password !== password) throw new AuthError('wrong credentials')

            return user._id.toString()
        })
}

module.exports = authenticateUser
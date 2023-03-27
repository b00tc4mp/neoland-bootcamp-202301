const { validateEmail, validatePassword, AuthError, ExistenceError } = require('../../com');
const { User } = require("../data/models")
/**
 * 
 * @param {string} email The user's email address
 * @param {number} password The user's email password
 * @returns 
 */

function authenticateUser(email, password) {
    validateEmail(email);
    validatePassword(password);


    return User.findOne({ email }).lean()
        .then(user => {
            if (!user) throw new ExistenceError('user not found')

            if (user.password !== password) throw new AuthError('wrong credentials')

            return user._id.toString()
        })
}

module.exports = authenticateUser
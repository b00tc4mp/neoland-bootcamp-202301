const { validateUserId, validateNewEmail, validatePassword, ExistenceError, AuthError }  = require('com')
const { User } = require('../data/models')

function  updateUserEmail(userId, newEmail, password,) {
    validateUserId(userId)
    validateNewEmail(newEmail)
    validatePassword(password)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)
            
            if (user.password !== password) throw new AuthError ('Wrong credentials')

            user.email = newEmail

            return user.save()
        })
}

module.exports = updateUserEmail
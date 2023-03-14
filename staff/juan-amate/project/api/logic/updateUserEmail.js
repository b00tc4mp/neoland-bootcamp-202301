const { User } = require('../data/models')
const { validateUserId, validateNewEmail, validatePassword, ExistenceError, AuthError } = require('com')

function updateUserEmail(userId, newEmail, password) {
    validateUserId(userId)
    validateNewEmail(newEmail)
    validatePassword(password)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (user.password !== password) throw new AuthError('wrong credentials')

            user.email = newEmail

            return user.save()
        })
}

module.exports = updateUserEmail
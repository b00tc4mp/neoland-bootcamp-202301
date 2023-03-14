const { Types: { ObjectId } } = require('mongoose')
const { validateUserId, validatePassword, MissingError, AuthError } = require('com')
const { User, Sticky } = require('../data/models')

function unregisterUser(userId, password) {
    validateUserId(userId)
    validatePassword(password)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new MissingError(`user with id ${id} not found`)

            if (user.password !== password) throw new AuthError('wrong credentials')

            return User.deleteOne({ _id: new ObjectId(userId) })
        })
        .then(() => {

            return Sticky.deleteMany({ user: userId })
        })
}

module.exports = unregisterUser
const { validateUserId, validatePassword,ExistenceError, AuthError } = require('com')
const { User,Nanny } = require('../data/models')
const {Types: {ObjectId}}= require('mongoose')

function unregisterNanny(userId, password) {
    validateUserId(userId)
    validatePassword(password)

    return User.findById(userId)
    .then(user => {
        if (!user) throw new ExistenceError(`user with id ${userId} not found`)
        if (user.password!== password) throw new AuthError('wrong credentials')

        return Nanny.deleteOne({'user': userId})

        .then(() => {return User.deleteOne({ _id: new ObjectId(userId) })}) 
    })
}

module.exports = unregisterNanny 

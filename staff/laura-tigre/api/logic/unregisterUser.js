
const { validateUserId, validatePassword,ExistenceError, AuthError } = require('com')
const { User, Sticky } = require('../data/models')
const {Types: {ObjectId}}= require('mongoose')


function unregisterUser(userId, password) {
    validateUserId(userId)
    validatePassword(password)

    
   return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (user.password !== password) throw new AuthError('wrong credentials')
            
            return Sticky.deleteMany({ 'user': userId })
               
            
            .then(() => { return User.deleteOne({ _id: new ObjectId(userId) })})

        })

}
module.exports = unregisterUser
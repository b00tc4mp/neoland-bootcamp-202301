const { Types: {ObjectId}} = require('mongoose')
const { validateUserId, validatePassword } = require('com')
const { User, Sticky } = require('../data/models')

function unregisterUser(userId, password) {
    validateUserId(userId)
    validatePassword(password)
  
    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error (`user with id ${userId} not found`)

            if (user.password !== password) throw new Error('wrong credentials')

            return Sticky.deleteMany({ "user": userId })
             
                .then(() => {
                    return User.deleteOne({_id: new ObjectId(userId)})
                })
        })
}

module.exports = unregisterUser
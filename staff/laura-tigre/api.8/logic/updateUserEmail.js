const { User} = require('../data/models')
const {Types: {ObjectId}}= require('mongoose')
const { validateUserId,validatePassword, validateNewEmail } = require('com')


function updateUserEmail(userId, password, newEmail) {
       validateUserId(userId)
       validatePassword(password)
       validateNewEmail(newEmail)

 

       return User.findById((userId) )
              .then(user => {
                     if (!user) throw new Error('user not found')
                     if (user.password !== password) throw new Error('wrong credentials')
                     user.email = newEmail
                     return user.save()

                     // return User.updateOne({ _id: new ObjectId(userId) }, { $set: { email: newEmail } })
              })



}
module.exports = updateUserEmail
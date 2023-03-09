const { User} = require('../data/models')

const { validateUserId,validatePassword, validateNewEmail ,MissingError, AuthError} = require('com')


function updateUserEmail(userId, password, newEmail) {
       validateUserId(userId)
       validatePassword(password)
       validateNewEmail(newEmail)

 

       return User.findById((userId) )
              .then(user => {
                     if (!user) throw new MissingError('user not found')
                     if (user.password !== password) throw new AuthError('wrong credentials')
                     user.email = newEmail
                     return user.save()

                     // return User.updateOne({ _id: new ObjectId(userId) }, { $set: { email: newEmail } })
              })



}
module.exports = updateUserEmail
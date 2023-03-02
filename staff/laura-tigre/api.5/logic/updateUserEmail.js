const { ObjectId } = require('mongodb')
const isEmail = require('../utils/isEmail')
function updateUserEmail(userId, password, newEmail) {
       if (typeof userId !== 'string') throw new Error('userId is not a string')
       if (typeof password !== 'string') throw new Error('password is not a string')
       if (password.length < 8) throw new Error('password is shorter than 8 characters')
       if (typeof newEmail !== 'string') throw new Error('newEmail is not a string')
       if (!isEmail(newEmail)) throw new Error('newEmail is not an email')

       const users = process.db.collection('users')

       return users.findOne({ _id: new ObjectId(userId) })
              .then(user => {
                     if (!user) throw new Error('user not found')
                     if (user.password !== password) throw new Error('wrong credentials')
                     return users.updateOne({ _id: new ObjectId(userId) }, { $set: { email: newEmail } })
              })



}
module.exports = updateUserEmail
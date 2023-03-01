const {ObjectId} = require('mongodb')
const isEmail = require('../utils/isEmail')

function  updateUserEmail(userId, newEmail, password,) {
    if (typeof userId !== 'string') throw new Error ('userId is not a string')
    if (typeof newEmail !== 'string') throw new Error ('newEmail is not a string')
    if (!isEmail(newEmail)) throw new Error('newEmail is not an email')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (password.length < 8) throw new Error('password is shorter than 8 characters')
    
    const users = process.db.collection('users')

    const filter = { _id: new ObjectId(userId)}

    return users.findOne(filter)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            
            if (user.password !== password) throw new Error ('wrong credentials')

            return users.updateOne(filter, {$set: { email: newEmail}})
        })
}

module.exports = updateUserEmail
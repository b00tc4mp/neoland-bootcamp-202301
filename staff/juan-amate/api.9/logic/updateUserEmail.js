const { ObjectId } = require('mongodb')
const isEmail = require('../utils/isEmail')

function updateUserEmail(userId, newEmail, password) {
    if (typeof newEmail !== 'string') throw new Error('New email must be a string')
    if (!isEmail(newEmail)) throw new Error('New email must be a valid email address')
    if (typeof password !== 'string') throw new Error('New password must be a string')
    if (password.length < 8) throw new Error('New password must be at least 8 characters')

    const users = process.db.collection('users')

    const filter = { _id: new ObjectId(userId) }

    return users.findOne(filter)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            if (user.password !== password) throw new Error('wrong credentials')

            return users.updateOne(filter, { $set: { email: newEmail } })
        })
}

module.exports = updateUserEmail
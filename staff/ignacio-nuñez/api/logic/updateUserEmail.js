const { ObjectId } = require('mongodb')

function updateUserEmail(userId, newEmail, password) {
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
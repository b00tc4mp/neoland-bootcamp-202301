const { ObjectId } = require('mongodb')

function unregisterUser(userId, password) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof password !== 'string') throw new Error('password must be a string')
    if (password.length < 8) throw new Error('password must be at least 8 characters')

    const users = process.db.collection('users')

    const filter = { _id: new ObjectId(userId) }

    return users.findOne(filter)
        .then(user => {
            if (!user) throw new Error('user not found')

            if (user.password !== password) throw new Error('wrong credentials')

            return users.deleteOne(filter)
        })
        .then(() => {
            const stickies = process.db.collection('stickies')

            return stickies.deleteMany({ user: userId })
        })
}


module.exports = unregisterUser
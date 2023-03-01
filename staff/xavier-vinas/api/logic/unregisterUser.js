const { ObjectId } = require('mongodb')
const { validatePassword } = require('com')

function unregisterUser(userId, password) {
    validatePassword(password)
    

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
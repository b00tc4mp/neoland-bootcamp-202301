const { ObjectId } = require('mongodb')
const { validateUserId } = require('com')

function retrieveMyStickies(userId) {
    validateUserId(userId)

    const users = process.db.collection('users')

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            const stickies = process.db.collection('stickies')

            return stickies.find({ user: userId }).toArray()
        })
}

module.exports = retrieveMyStickies
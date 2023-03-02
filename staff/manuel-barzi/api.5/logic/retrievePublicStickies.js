const { ObjectId } = require('mongodb')
const { validateUserId } = require('com')

/**
 * Retrieves the public stickies from all users that publish them
 * 
 * @param {string} userId The user id that requests the public stickies
 */
function retrievePublicStickies(userId) {
    validateUserId(userId)

    const users = process.db.collection('users')

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            const stickies = process.db.collection('stickies')

            return stickies.find({ visibility: 'public' }).toArray()
        })
}

module.exports = retrievePublicStickies
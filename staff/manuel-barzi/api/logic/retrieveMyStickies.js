const { ObjectId } = require('mongodb')

/**
 * Retrieves the stickies that belong to the specified user (email)
 * 
 * @param {string} userId The userId of the user to retrieve the stickies from
 * 
 * @return {Array} The stickies that belong to the specified user
 */
function retrieveMyStickies(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')

    const users = process.db.collection('users')

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            const stickies = process.db.collection('stickies')

            return stickies.find({ user: userId }).toArray()
        })
}

module.exports = retrieveMyStickies
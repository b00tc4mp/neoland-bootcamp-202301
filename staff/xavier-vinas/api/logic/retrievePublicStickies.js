/**
 * Retrieves the public stickies from all users that publish them
 * 
 * @param {string} userId The user id that requests the public stickies
 */
function retrievePublicStickies(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')

    const users = process.db.collection('users')

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            const stickies = process.db.collection('stickies')

            return stickies.find({ visibility: 'public' }).toArray()
        })
}

module.exports = retrievePublicStickies
const { ObjectId } = require('mongodb')

/**
 * Creates a new sticky in the database
 * 
 * @param {string} email The user the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(userId, text, visibility) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof text !== 'string') throw new Error('text is not a string')
    if (typeof visibility !== 'string') throw new Error('visibility is not a string')
    if (visibility !== 'public' && visibility !== 'private') throw new Error('visibility value is invalid')

    const stickies = process.db.collection('stickies')
    const users = process.db.collection('users')
    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            const sticky = {
                user: userId,
                text,
                visibility,
                likes: []
            }

            return stickies.insertOne(sticky)
        })
}
module.exports = createSticky

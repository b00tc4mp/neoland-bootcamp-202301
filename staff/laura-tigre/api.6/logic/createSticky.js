const { validateUserId, validateText, validateVisibility } = require('com')

const { ObjectId } = require('mongodb')

/**
 * Creates a new sticky in the database
 * 
 * @param {string} email The user the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(userId, text, visibility) {
    validateUserId(userId)
    validateText(text)
    validateVisibility(visibility)
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

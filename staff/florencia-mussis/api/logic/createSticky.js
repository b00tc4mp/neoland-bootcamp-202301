const { ObjectId } = require('mongodb')
const { validateUserId, validateText, validateVisibility } = require('com')

/**
 * Creates a new sticky in the database
 * 
 * @param {string} userId The userId the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(userId, text, visibility){
    // TODO validate input arguments
    validateUserId(userId)
    validateText(text)
    validateVisibility(visibility)

    // TODO validate user
    const users = process.db.collection('users')

    return users.findOne({ _id: new ObjectId(userId) })
    .then(user => {
        if (!user) throw new Error(`user with id ${userId} not found`)

        const stickies = process.db.collection('stickies')

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
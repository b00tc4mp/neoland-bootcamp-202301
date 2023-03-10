const { ObjectId } = require('mongodb')

/**
 * Toggles the likeability of a specific sticky
 * 
 * @param {string} userId The userId
 * @param {string} stickyId The sticky identifier
 */
function toggleLikeSticky(userId, stickyId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof stickyId !== 'string') throw new Error('stickyId is not a string')

    const users = process.db.collection('users')
    const stickies = process.db.collection('stickies')

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return stickies.findOne({ _id: new ObjectId(stickyId) })
        })
        .then(sticky => {
            if (!sticky) throw new Error(`sticky with id ${stickyId} not found`)

            const likes = sticky.likes

            const index = likes.indexOf(userId)

            if (index < 0)
                likes.push(userId)
            else
                likes.splice(index, 1)

            return stickies.updateOne({ _id: new ObjectId(stickyId) }, { $set: { likes } })
        })
}

module.exports = toggleLikeSticky
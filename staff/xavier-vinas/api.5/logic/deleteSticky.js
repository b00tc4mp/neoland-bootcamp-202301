const { ObjectId } = require('mongodb')

/**
 * Deletes the specified sticky by id that belongs to the specified user (by userId)
 * 
 * @param {string} userId The userId address of the user
 * @param {string} stickyId The sticky id of the sticky
 */
function deleteSticky(userId, stickyId) {
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

            if (sticky.user !== userId) throw new Error(`sticky with id ${stickyId} does not belong to user with id ${userId}`)

            return stickies.deleteOne({ _id: new ObjectId(stickyId) })
        })
}

module.exports = deleteSticky
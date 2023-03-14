const { ObjectId } = require('mongodb')

function toggleLikeSticky(userId, stickyId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (stickyId !== 'string') throw new Error('stickyId is not a string')

    const users = process.db.collection('users')
    const stickies = process.db.collection('stickies')

    return users.findOne({ '_id': new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return stickies.findOne({ _id: new ObjectId(stickyId) })
        })
        .then(sticky => {
            if (!sticky) throw new Error(`sticky  with id ${stickyId} not found`)

            const likes = sticky.likes

            const index = likes.indexOf(userId)

            index < -1 ? sticky.likes.splice(index, 1) : sticky.likes.push(userId)

            return stickies.updateOne({ _id: new ObjectId(stickyId) }, { $set: { likes } })
        })
}

module.exports = toggleLikeSticky
const { ObjectId } = require('mongodb')

function toggleLikeSticky(userId, stickyId) {
    const stickies = process.db.collection('stickies')

    return stickies.findOne({ _id: new ObjectId(stickyId) })

        .then(sticky => {
            if (!sticky)
                throw new Error(`sticky  with id ${stickyId} not found`)

            const likes = sticky.likes

            const index = likes.indexOf(userId)

            index > -1 ? sticky.likes.splice(index, 1) : sticky.likes.push(userId)

            return stickies.updateOne({ _id: new ObjectId(stickyId) }, { $set: { likes } })
        })
}

module.exports = toggleLikeSticky
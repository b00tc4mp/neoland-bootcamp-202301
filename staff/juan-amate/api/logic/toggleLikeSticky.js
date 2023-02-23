const { ObjectId } = require('mongodb')

function toggleLikeSticky(userId, stickyId) {
    const stickies = process.db.collection('stickies')

    return stickies.findOne({ _id: new ObjectId(stickyId) })

        .then(sticky => {
            const index = sticky.likes.indexOf(userId)

            index > -1 ? sticky.likes.splice(index, 1) : sticky.likes.push(userId)

            return stickies.updateOne({ _id: new ObjectId(stickyId) }, { $set: { likes: sticky.likes } })
        })
}

module.exports = toggleLikeSticky
const { ObjectId } = require('mongodb')

function updateStickyText(userId, stickyId, text) {
    const stickies = process.db.collection('stickies')

    return stickies.updateOne({ _id: new ObjectId(stickyId) }, { $set: { text } })
}

module.exports = updateStickyText
const { ObjectId } = require('mongodb')

function deleteSticky(userId, stickyId) {
  const stickies = process.db.collection('stickies')

  return stickies.findOne({ '_id': new ObjectId(stickyId) })
    .then(sticky => {
      if (sticky.user !== userId) throw new Error(`sticky with id ${stickyId} does not belong to user with id ${userId}`)

      return stickies.deleteOne({ '_id': new Object(stickyId) })
    })
}

module.exports = deleteSticky
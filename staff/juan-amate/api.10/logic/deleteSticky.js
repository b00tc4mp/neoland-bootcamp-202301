const { ObjectId } = require('mongodb')
const { validateUserId, validateStickyId } = require('com')

/**
 * Deletes the specified sticky by id that belongs to the specified user (by userId)
 * 
 * @param {string} userId The userId address of the user
 * @param {string} stickyId The sticky id of the sticky
 */
function deleteSticky(userId, stickyId) {
  validateUserId(userId)
  validateStickyId(stickyId)

  const users = process.db.collection('users')
  const stickies = process.db.collection('stickies')

  return users.findOne({ '_id': new ObjectId(userId) })
    .then(user => {
      if (!user) throw new Error(`user with id ${userId} not found`)


      return stickies.findOne({ _id: new ObjectId(stickyId) })
    })
    .then(sticky => {
      if (!sticky) throw new Error('sticky with id ' + stickyId + ' not found')

      if (sticky.user !== userId) throw new Error('sticky with id ' + stickyId + ' does not belong to user with id ' + userId)

      return stickies.deleteOne({ _id: new ObjectId(stickyId) })
    })
}

module.exports = deleteSticky
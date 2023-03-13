const { User, Sticky } = require('../data/models')
const { Types: { ObjectId } } = require('mongoose')
const { validateUserId, validateStickyId, validateVisibility, ExistenceError, CoherenceError } = require('com')


function updateStickyVisibility(userId, stickyId, visibility) {
  validateUserId(userId)
  validateStickyId(stickyId)
  validateVisibility(visibility)

  return User.findById((userId))
    .then(user => {
      if (!user) throw new ExistenceError(`user with id ${userId} not found`)

      return Sticky.findById((stickyId))
    })
    .then(sticky => {

      if (!sticky) throw new ExistenceError(`sticky with id '${stickyId}s' not found`)
      if (sticky.user.toString() !== userId) throw new CoherenceError(`sticky with id '${stickyId}s' does not belong to user with id '${userId}'`)


      return Sticky.updateOne({ _id: new ObjectId(stickyId) }, { $set: { visibility } })
    })
}

module.exports = updateStickyVisibility
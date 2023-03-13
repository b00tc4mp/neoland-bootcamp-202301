const { User, Sticky } = require('../data/models')

const { validateUserId, validateStickyId, validateText, CoherenceError, ExistenceError} = require('com')
/**
 * Retrieves the public stickies from all users that publish them
 * 
 * @return {Array} The public stickies
 */
function updateStickyText(userId, stickyId, text) {
  validateUserId(userId)
  validateStickyId(stickyId)
  validateText(text)


  return User.findById((userId))
    .then(user => {
      if (!user) throw new ExistenceError(`user with id ${userId} not found`)

      return Sticky.findById((stickyId))
    })
    .then(sticky => {

      if (!sticky) throw new ExistenceError(`sticky with id '${stickyId}' not found`)
      if (sticky.user.toString() !== userId) throw new CoherenceError(`sticky with id ${stickyId} does not belong to user with id ${userId}`)
      sticky.text = text
      return sticky.save()


    })
}


module.exports = updateStickyText

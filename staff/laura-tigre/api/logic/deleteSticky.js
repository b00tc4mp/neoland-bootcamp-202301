const { User, Sticky } = require('../data/models')
const {Types:{ ObjectId} }= require('mongoose')
const { validateUserId, validateStickyId,ExistenceError } = require('com')

function deleteSticky( userId, stickyId){
  validateUserId(userId)
  validateStickyId(stickyId)
  
  return User.findById((userId))
  .then(user => {
    if (!user) throw new ExistenceError(`user with id ${userId} not found`)

    return Sticky.findById((stickyId))
})
.then(sticky => {
    if (!sticky) throw new ExistenceError(`sticky with id ${stickyId} not found`)

    if (sticky.user.toString() !== userId) throw new CoherenceError(`sticky with id ${stickyId} does not belong to user with id ${userId}`)

    return Sticky.deleteOne({ _id: new ObjectId(stickyId) })
})
   }

   module.exports = deleteSticky



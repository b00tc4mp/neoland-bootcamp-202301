const { validateUserId } = require('com')
const { User, Sticky } = require('../data/models')
/**
 *Retrieves the public stickies from all users that publish them
 * 
 * @return {array} The public stickies
 */
function retrievePublicStickies(userId) {
  validateUserId(userId)


  return User.findById((userId))
    .then(user => {
      if (!user) throw new Error(`user with id ${userId} not found`)



      return Sticky.find({visibility: 'public'}).populate({path: 'user', select: 'name'}).lean()
    })

    .then(stickies => {
      stickies.forEach(sticky => {

        if(sticky._id){
          sticky.id= sticky._id.toString()
          delete sticky._id
          delete sticky.__v
        }
        if(sticky.user._id){
          sticky.user.id= sticky.user._id.toString()
          delete sticky.user._id
        }

      })
      return stickies
    })
}
module.exports = retrievePublicStickies
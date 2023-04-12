const { User, Sticky } = require('../data/models')
const { validateUserId } = require('com')

function retrieveMyStickies(userId) {
    validateUserId(userId)

    return User.findById((userId))
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Sticky.find({ user: userId }).populate({path:'user', select: 'name'}).lean()
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
              sticky.likes = sticky.likes.map(like => like.toString())
            })
            return stickies
        })
}
module.exports = retrieveMyStickies

const { User, Sticky } = require('../data/models')
const { validateUserId, ExistenceError } = require('com')

function retrieveMyStickies(userId) {
    validateUserId(userId)

    return Promise.all([ User.findById(userId).lean(),
      Sticky.find({ user: userId }).populate({path:'user', select: 'name'}).lean()
    ])
        .then(([user, stickies]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            
            stickies.forEach(sticky => {
              //agregate

              sticky.fav = user.favs.some(stickyId => stickyId.toString() === sticky._id.toString())

              //sanitize 
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
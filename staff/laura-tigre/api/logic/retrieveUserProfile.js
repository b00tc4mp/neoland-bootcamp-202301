const { validateUserId, validateUserProfileId, ExistenceError } = require('com')
const { User, Sticky } = require('../data/models')

function retrieveUserProfile(userId, userProfileId) {
    validateUserId(userId)
    validateUserProfileId(userProfileId)


    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            return User.findById(userProfileId).lean()
            .then(user => {
                if (!user) throw new ExistenceError(`user profile with id ${userId} not found`)
    
                return Sticky.find({ user: userProfileId }).lean()
    
                .then(stikies=> {
                    stikies.forEach(sticky => {
                        //sanitize
        
                        if (sticky._id){
                            sticky.id = sticky._id.toString()
                            delete sticky._id
                        }
        
                        if(sticky.user){
                            sticky.user = sticky.user.toString()
        
                        }
                        sticky.likes = sticky.likes.map(like => like.toString())
        
                         delete sticky.__v
                    })
        
                    return {name: user.name, stikies}
                })
            })
        })
        
}

module.exports = retrieveUserProfile

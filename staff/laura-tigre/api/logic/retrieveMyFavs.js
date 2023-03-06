const { User} = require('../data/models')
const { validateUserId } = require('com')

function retrieveMyFavs(userId) {
    validateUserId(userId)


    return User.findById(userId).populate({
        path: 'favs',
        select: '-__v',
        populate: {
            path: 'user',
            select: 'name'
        }
    }).lean()
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)
           
            user.favs.forEach(fav =>{
                fav.id = fav._id.toString()
                if(fav.user._id){
                    fav.user.id = fav.user._id.toString()

                    delete fav.user._id
                }

                delete fav._id
            })

            return user.favs
        })
        


}
module.exports = retrieveMyFavs
const { User} = require('../data/models')
const { validateUserId } = require('com')

function retrieveFavStickies(userId) {
    validateUserId(userId)

    return User.findById(userId).populate({
        path: 'favs', //los favoritos del usuario
        select: '-__v', //trae todas las propiedades del sticky menos __v
        populate: {
            path: 'user', //del user de cada sticky solo me traigo el name
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

            return user.favs //array con todos los favoritos del usuario
        })
}
module.exports = retrieveFavStickies
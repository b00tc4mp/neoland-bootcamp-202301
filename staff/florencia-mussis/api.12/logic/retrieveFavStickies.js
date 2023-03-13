const { validateUserId, ExistenceError } = require('com')
const { User } = require('../data/models')

/**
 * Retrieves the favorites stickies from user
 * 
 * @param {string} userId The user id
 */
function retrieveFavStickies(userId) {
    validateUserId(userId)

    return User.findById(userId).populate({
        path: 'favs', //los favoritos del usuario
        select: '-__v', //trae todas las propiedades del sticky menos __v
        populate: { //populate del sticky
            path: 'user', //del user de cada sticky solo me traigo el name
            select: 'name'
        }
    }).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            const stickies = user.favs //array con todos los favoritos del usuario

            stickies.forEach(sticky => {
                // sanitize

                if (sticky._id) {
                    sticky.id = sticky._id.toString()
                    delete sticky._id
                }

                if (sticky.user._id) {
                    sticky.user.id = sticky.user._id.toString()
                    delete sticky.user._id
                }

                sticky.likes = sticky.likes.map(like => like.toString())
            })

            return stickies
        })
}

module.exports = retrieveFavStickies
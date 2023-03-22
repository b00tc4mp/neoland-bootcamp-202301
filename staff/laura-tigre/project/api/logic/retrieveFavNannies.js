const { User} = require('../data/models')
const { validateUserId, ExistenceError } = require('com')

function retrieveFavNannies(userId) {
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
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            const nannies = user.favs
            nannies.forEach(nanny => {
                nanny.fav = true

                if (nanny._id) {
                    nanny.id = nanny._id.toString()
                    delete nanny._id
                    delete nanny.__v
                }
                if (nanny.user._id) {
                    nanny.user.id = nanny.user._id.toString()
                    delete nanny.user._id

                }
                nanny.availabilities.forEach(availability => {
                    availability.id = availability._id.toString()
                    delete availability._id
                })


            })

            return nannies



        })



}
module.exports = retrieveFavNannies
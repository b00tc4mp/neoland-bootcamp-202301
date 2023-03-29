const { User, Parent, Chat } = require('../data/models')
const { validateUserId, ExistenceError } = require('com')

/**
 *retrieve favorits nanny
 * 
 * @param {string} userId The user who owns the favorites list
 */

function retrieveFavNannies(userId) {
    validateUserId(userId)


    return Promise.all([
        User.findById(userId).lean,
        Parent.findOne({ user: userId }).populate({
            path: 'favs',
            populate: {
                path: 'user'
            }
        }).lean()
    ])
        .then(([user, parent]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (!parent) throw new ExistenceError(`Parent related to user with id ${userId} not found`)
            return Chat.findOne({ users: userId }).lean()
                .then(chats => {
                    const nannies = parent.favs.map(nanny => {
                        const _nanny = {}

                        _nanny.id = nanny._id.toString()
                        _nanny.fav = true

                        _nanny.name = nanny.user.name
                        _nanny.email = nanny.user.email

                        _nanny.availabilities = nanny.availabilities

                        nanny.availabilities.forEach(availability => {
                            availability.id = availability._id.toString()
                            delete availability._id
                        })
                        _nanny.photo = nanny.photo

                        _nanny.experience = nanny.experience

                        return _nanny
                    })
                    return nannies

                })




        })



}
module.exports = retrieveFavNannies
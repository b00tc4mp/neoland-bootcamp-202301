const { User, Nanny } = require('../data/models')
const { validateUserId, ExistenceError } = require('com')

function retrieveFavParents(userId) {
    validateUserId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Nanny.findOne({ user: userId }).populate({
            path: 'favs',
            populate: {
                path: 'user'
            }
        }).lean()
    ])
        .then(([user, nanny]) => {
            if (!user) throw new ExistenceError(`User ${userId} not found`)

            if (!nanny) throw new ExistenceError(`Nanny related to user with id ${userId} not found`)

            const parents = nanny.favs.map(parent => {
                const _parent = {}

                _parent.id = parent._id.toString()
                _parent.fav = true

                _parent.name = parent.user.name

                _parent.availabilities = parent.availabilities

                _parent.availabilities.forEach(availability => {
                    availability.id = availability._id.toString()
                    delete availability._id
                })

                _parent.kids = parent.kids

                _parent.kids.forEach(kid => {
                    kid.id = kid._id.toString()
                    delete kid._id
                })

                return _parent
            })

            return parents
        })


}
module.exports = retrieveFavParents
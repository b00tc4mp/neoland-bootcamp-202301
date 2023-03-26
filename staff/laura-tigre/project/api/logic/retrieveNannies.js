const { validateUserId, ExistenceError } = require('com')
const { User, Parent, Nanny } = require('../data/models')
/**
 * 
 * @param {string} userId 
 * @param {*}  
 * @returns 
 */

function retrieveNannies(userId) {
    validateUserId(userId)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            return Parent.findOne({ user: userId }).lean()
                .then(parent => {
                    return Nanny.find({ city: parent.city }).populate('user', '-password -__v').select('-__v').lean()

                    .then(nannies => {

                            const favNannies = parent.favs.map(fav => fav.toString())

                            nannies.forEach(nanny => {

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

                                if (favNannies.includes(nanny.id)) nanny.fav = true

                            })
                            return nannies

                        })
                })

        })
}

module.exports = retrieveNannies


const { validateUserId, validateUserNannyId, ExistenceError, CoherenceError } = require('com')
const { User, Nanny } = require('../data/models')

function retrieveNanny(userId, nannyId) {
    validateUserId(userId)
    if (typeof nannyId !== 'undefined') validateUserNannyId(nannyId)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            let promise

            if (nannyId)
                promise = Nanny.findById(nannyId).populate('user', 'name').select('-__v').lean()
            else
                promise = Nanny.findOne({ user: userId }).populate('user', 'name').select('-__v').lean()

            return promise
                .then(nanny => {
                    if (!nanny) throw new ExistenceError(`nanny with id ${nannyId} not found`)

                    if (user.role === 'nanny' && nanny.user._id.toString() !== userId) throw new CoherenceError(`user id ${userId} with role nanny is not related to nanny with id ${nannyId}`)

                    // sanitize
                    nanny.id = nanny._id.toString()
                    nanny.user.id = nanny.user._id.toString()
                    nanny.availabilities.forEach(availability => {
                        availability.id = availability._id.toString()
                        delete availability._id
                    })
                    
                    delete nanny._id
                    delete nanny.user._id

                    return nanny
                })
        })
}

module.exports = retrieveNanny
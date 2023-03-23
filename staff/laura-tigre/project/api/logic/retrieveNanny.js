const { validateUserId, validateUserNannyId, ExistenceError, CoherenceError } = require('com')
const { User, Nanny } = require('../data/models')

function retrieveNanny(userId, nannyId) {

    validateUserId(userId)
    validateUserNannyId(nannyId)

    return Promise.all([User.findById(userId).lean(), Nanny.findById(nannyId).populate('user', 'name').select('-__v').lean()])
        .then(([user, nanny]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!nanny) throw new ExistenceError(`nanny with id ${nannyId} not found`)
            if (user.role === 'nanny' && nanny.user.toString() !== nannyId) throw new CoherenceError(`nanny with id ${nannyId} is not related to the user with id ${userId} and role nanny`)
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
}
module.exports = retrieveNanny
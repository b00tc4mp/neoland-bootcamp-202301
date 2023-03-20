const {User, Nanny} = require('../data/models')

const { validateUserId,validateUserProfileId, validateNewDescription ,ExistenceError, AuthError} = require('com')

function updateDescription(userId,nannyId, newDescription) {
    validateUserId(userId)
    validateUserProfileId(nannyId)
    validateNewDescription(newDescription)


    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            return Nanny.findById(nannyId).populate('user', 'name').select('description').lean()
        })
        .then(nanny => {
            if (!nanny) throw new ExistenceError(`nanny with id ${nannyId} not found`)
            nanny.description = newDescription
            return nanny

        })
}
module.exports = updateDescription
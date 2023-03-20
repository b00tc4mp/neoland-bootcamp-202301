const {User, Nanny} = require('../data/models')

const { validateUserId,validateUserProfileId, validateNewExperience ,ExistenceError, AuthError} = require('com')

function updateExperience(userId,nannyId, newExperience) {
    validateUserId(userId)
    validateUserProfileId(nannyId)
    validateNewExperience(newExperience)


    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            return Nanny.findById(nannyId).populate('user', 'name').select('experience').lean()
        })
        .then(nanny => {
            if (!nanny) throw new ExistenceError(`nanny with id ${nannyId} not found`)
            nanny.experience = newExperience
            return nanny

        })
}
module.exports = updateExperience
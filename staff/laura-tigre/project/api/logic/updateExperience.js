const {User, Nanny} = require('../data/models')

const { validateUserId,validateUserNannyId, validateNewExperience ,ExistenceError, AuthError} = require('com')

function updateExperience(userId,nannyId, newExperience) {
    validateUserId(userId)
    validateUserNannyId(nannyId)
    validateNewExperience(newExperience)


    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            return Nanny.findById(nannyId)
        })
        .then(nanny => {
            if (!nanny) throw new ExistenceError(`nanny with id ${nannyId} not found`)
            nanny.experience = newExperience
            return nanny.save()

        })
}
module.exports = updateExperience
const { User, Nanny } = require('../data/models')

const { validateUserId, validateNewPhoto, ExistenceError } = require('com')

function updatePhotoNanny(userId, newPhoto) {
    validateUserId(userId)
    validateNewPhoto(newPhoto)


    return Promise.all([User.findById(userId).lean(), Nanny.findOne({ user: userId })])
        .then(([user, nanny]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!nanny) throw new ExistenceError(`nanny with id ${userId} not found`)
            nanny.photo = newPhoto
            return nanny.save()
        })
}
module.exports = updatePhotoNanny
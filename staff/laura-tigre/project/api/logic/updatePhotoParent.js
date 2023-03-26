const { User, Parent } = require('../data/models')

const { validateUserId, validateNewPhoto, ExistenceError } = require('com')

function updatePhotoParent(userId, newPhoto) {
    validateUserId(userId)
    validateNewPhoto(newPhoto)


    return Promise.all([User.findById(userId).lean(), Parent.findOne({ user: userId })])
        .then(([user, parent]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!parent) throw new ExistenceError(`parent with id ${userId} not found`)
            parent.photo = newPhoto
            return parent.save()
        })
}
module.exports = updatePhotoParent
const { validateUserId, validateStickyId, validateVisibility } = require('com')
const { User, Sticky } = require('../data/models')

function updateStickyVisibility(userId, stickyId, visibility) {
    validateUserId(userId)
    validateStickyId(stickyId)
    validateVisibility(visibility)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Sticky.findById(stickyId)
        })
        .then(sticky => {
            if (!sticky)
                throw new Error(`sticky with id ${stickyId} not found`)

            if (sticky.user.toString() !== userId)
                throw new Error(`sticky with id ${stickyId} does not belong to user with id ${userId}`)

            sticky.visibility = visibility

            return sticky.save()
        })
}

module.exports = updateStickyVisibility
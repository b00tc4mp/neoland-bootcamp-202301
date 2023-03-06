const { validateUserId, validateStickyId } = require('com')
const { User, Sticky } = require('../data/models')

function toggleLikeSticky(userId, stickyId) {
    validateUserId(userId)
    validateStickyId(stickyId)

    return Promise.all([User.findById(userId), Sticky.findById(stickyId)])
        .then(([user, sticky]) => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            if (!sticky) throw new Error(`sticky  with id ${stickyId} not found`)

            const likes = sticky.likes

            const index = likes.indexOf(userId)

            if (index < 0)
                likes.push(userId)
            else
                likes.splice(index, 1)

            return sticky.save()
        })
}

module.exports = toggleLikeSticky
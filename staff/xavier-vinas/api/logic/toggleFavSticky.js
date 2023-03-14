const { validateUserId, validateStickyId, ExistenceError } = require('com')
const { User, Sticky } = require('../data/models')

/**
 * Toggles favorite on sticky
 * 
 * @param {string} userId The userId
 * @param {string} stickyId The sticky identifier
 */
function toggleFavSticky(userId, stickyId) {
    validateUserId(userId)
    validateStickyId(stickyId)

    return Promise.all([User.findById(userId), Sticky.findById(stickyId)])
        .then(([user, sticky]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (!sticky) throw new ExistenceError(`sticky with id ${stickyId} not found`)

            const favs = user.favs

            const index = favs.indexOf(stickyId)

            if (index < 0)
                favs.push(stickyId)
            else
                favs.splice(index, 1)

            return user.save()
        })
}

module.exports = toggleFavSticky
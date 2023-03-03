const { validateUserId, validateStickyId } = require('com')
const { User, Sticky } = require('../data/models')

/**
 * Toggles the likeability of a specific sticky
 * 
 * @param {string} userId The userId
 * @param {string} stickyId The sticky identifier
 */
function toggleFavsSticky(userId, stickyId) {
    validateUserId(userId)
    validateStickyId(stickyId)

    return Sticky.findById(stickyId)
        .then(sticky => {
            if (!sticky) throw new Error(`sticky with id ${stickyId} not found`)

           return User.findById(userId)
        })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            const favs = user.favs

            const index = favs.indexOf(stickyId)

            if (index < 0)
                favs.push(stickyId)
            else
                favs.splice(index, 1)

            return user.save()
        })
}

module.exports = toggleFavsSticky
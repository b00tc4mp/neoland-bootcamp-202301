const { Types: { ObjectId } } = require('mongoose')
const { validateUserId, validateStickyId } = require('com')
const { User, Sticky } = require('../data/models')

/**
 * Deletes the specified sticky by id that belongs to the specified user (by userId)
 * 
 * @param {string} userId The userId address of the user
 * @param {string} stickyId The sticky id of the sticky
 */
function deleteSticky(userId, stickyId) {
    validateUserId(userId)
    validateStickyId(stickyId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Sticky.findById(stickyId)
        })
        .then(sticky => {
            if (!sticky) throw new Error(`sticky with id ${stickyId} not found`)

            if (sticky.user.toString() !== userId) throw new Error(`sticky with id ${stickyId} does not belong to user with id ${userId}`)

            return Sticky.deleteOne({ _id: new ObjectId(stickyId) })
        })

        // TODO delete sticky id from user favs that may have it
}

module.exports = deleteSticky
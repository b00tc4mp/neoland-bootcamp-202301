const { validateUserId, validateListId, validateSharedId, ExistenceError, CoherenceError, } = require('com')
const { User, List } = require('../data/models')

/**
 * Deletes the specified list by id that belongs to the specified user (by userId)
 * 
 * @param {string} userId The userId of the user 
 * @param {string} listId The listId of the list
 * @param {string} shareId The shareId of the share
 */
function removeSharedFromList(userId, listId, sharedId) {
    validateUserId(userId)
    validateListId(listId)
    validateSharedId(sharedId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            return List.findById(listId)
        })
        .then(list => {
            if (!list) throw new ExistenceError(`List with id ${listId} not found`)

            if (list.user.toString() !== userId) throw new CoherenceError(`List with id ${listId} does not belong to user with id ${userId}`)

            const sharedIndex = list.shareds.findIndex(shared => shared._id.toString() === sharedId)

            if (sharedIndex < 0) throw new ExistenceError(`Shared ${shared} not found`)

            list.shareds.splice(sharedIndex, 1)

            return list.save()
        })
}

module.exports = removeSharedFromList
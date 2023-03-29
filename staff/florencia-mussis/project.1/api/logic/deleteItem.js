const { validateUserId, validateListId, validateItemId, ExistenceError, CoherenceError } = require('com')
const { User, List } = require('../data/models')

/**
 * Deletes the specified list by id that belongs to the specified user (by userId)
 * 
 * @param {string} userId The userId of the user 
 * @param {string} listId The listId of the list
 * @param {string} itemId The itemId of the item
 */
function deleteItem(userId, listId, itemId) {
    validateUserId(userId)
    validateListId(listId)
    validateItemId(itemId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            return List.findById(listId)
        })
        .then(list => {
            if (!list) throw new ExistenceError(`List with id ${listId} not found`)

            if (list.user.toString() !== userId) throw new CoherenceError(`List with id ${listId} does not belong to user with id ${userId}`)

            const itemIndex = list.items.findIndex(item => item._id.toString() === itemId)

            if (itemIndex < 0) throw new ExistenceError(`Item with id ${itemId} not found`)

            list.items.splice(itemIndex, 1)

            return list.save()
        })
}

module.exports = deleteItem
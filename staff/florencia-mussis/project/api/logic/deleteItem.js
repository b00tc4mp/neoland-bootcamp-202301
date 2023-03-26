const { validateUserId, validateListId, validateItemId, ExistenceError, CoherenceError } = require('com')
const { User, List } = require('../data/models')

/**
 * Deletes the item specified by id belonging to the list specified by id and the specified user (by user id)
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

            if (list.user._id.toString() !== userId)
                if (!list.shareds.length)
                    throw new CoherenceError(`The list with id ${listId} is not shared with user with id ${userId}`)
                else {
                    const shared = list.shareds.find(shared => shared.user._id.toString() === userId)

                    if (!shared)
                        throw new CoherenceError(`The list with id ${listId} is not shared with user with id ${userId}`)
                    else if (shared.mode !== 'editor')
                        throw new CoherenceError(`The user with id ${userId} is not an editor`)
                }

            const itemIndex = list.items.findIndex(item => item._id.toString() === itemId)

            if (itemIndex < 0) throw new ExistenceError(`Item with id ${itemId} not found`)

            list.items.splice(itemIndex, 1)

            return list.save()
        })
}

module.exports = deleteItem
const { validateUserId, validateListId, validateItemId, validateChecked, ExistenceError, CoherenceError } = require('com')
const { User, List } = require('../data/models')

/**
 * Updates the item check
 * 
 * @param {string} userId The userId of the user 
 * @param {string} listId The listId of the list
 * @param {string} itemId The itemId of the item
 * @param {boolean} checked The check to update
 */
function updateItemCheck(userId, listId, itemId, checked) {
    validateUserId(userId)
    validateListId(listId)
    validateItemId(itemId)
    validateChecked(checked)

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

            const item = list.items.find(item => item._id.toString() === itemId)

            if (!item) throw new ExistenceError(`Item with id ${itemId} not found`)

            item.checked = checked

            return list.save()
        })
}


module.exports = updateItemCheck
const { validateUserId, validateListId, ExistenceError, CoherenceError } = require('com')
const { User, List } = require('../data/models')

/**
 * Deletes the specified list by id that belongs to the specified user (by userId)
 * 
 * @param {string} userId The userId of the user 
 * @param {string} listId The listId of the list
 */
function toggleAllItemsCheck(userId, listId) {
    validateUserId(userId)
    validateListId(listId)

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

            const checkedAll = list.items.every(item => item.checked)

            if (checkedAll)
                list.items.forEach(item => item.checked = false)
            else
                list.items.forEach(item => item.checked = true)

            return list.save()
        })
}

module.exports = toggleAllItemsCheck
const { validateUserId, validateListId, validateTitle, ExistenceError, CoherenceError } = require('com')
const { User, List } = require('../data/models')

/**
 * Updates the list title
 * 
 * @param {string} userId The user id of the user 
 * @param {string} listId The list id of the list
 * @param {string} title The title to update
 */
function updateListTitle(userId, listId, title) {
    validateUserId(userId)
    validateListId(listId)
    validateTitle(title)

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

            list.title = title

            return list.save()
        })
}

module.exports = updateListTitle
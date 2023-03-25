const { User, List } = require('../data/models')
const { validateUserId, validateListId, validateArchived, ExistenceError, CoherenceError } = require('com')

function updateListArchived(userId, listId, archived) {
    validateUserId(userId)
    validateListId(listId)
    validateArchived(archived)

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

            list.archived = archived

            return list.save()
        })

}

module.exports = updateListArchived
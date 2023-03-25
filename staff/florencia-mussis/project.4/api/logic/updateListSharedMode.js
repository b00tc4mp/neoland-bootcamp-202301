const { User, List } = require('../data/models')
const { validateUserId, validateListId, validateSharedId, validateMode, ExistenceError, CoherenceError } = require('com')

function updateListSharedMode(userId, listId, sharedId, mode) {
    validateUserId(userId)
    validateListId(listId)
    validateSharedId(sharedId)
    validateMode(mode)

    return User.findById(userId)
        .then(user =>{
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
        
            return List.findById(listId)
        })
        .then(list => {
            if (!list) throw new ExistenceError(`list with id ${listId} not found`)
            
            if (list.user.toString() !== userId) throw new CoherenceError(`list with id ${listId} does not belong to user  with id ${userId}`)
            
            const shared = list.shareds.find(shared => shared._id.toString() === sharedId)

            if (!shared)throw new ExistenceError(`Shared with id ${sharedId} not found`)

            shared.mode = mode

            return list.save()
        })

}

module.exports = updateListSharedMode
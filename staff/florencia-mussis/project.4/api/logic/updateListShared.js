const { validateUserId, validateListId, validateShared, ExistenceError, CoherenceError } = require('com')
const { User, List } = require('../data/models')

function updateListShared(userId, listId, shared) {
    validateUserId(userId)
    validateListId(listId)
    validateShared(shared)
 
    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError (`User with id ${userId} not found`)

            return List.findById(listId)
        })
        .then(list => {
            if (!list)throw new ExistenceError(`List with id ${listId} not found`)
            
            if (list.user.toString() !== userId) throw new CoherenceError(`List with id ${listId} does not belong to user  with id ${userId}`)
          
            list.shared = shared

            return list.save()
        })
    }


module.exports = updateListShared
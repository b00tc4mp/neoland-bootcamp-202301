const { User, List } = require('../data/models')
const { validateUserId, validateListId, validateArchived, ExistenceError, CoherenceError } = require('com')

function archiveList(userId, listId, archived) {
    validateUserId(userId)
    validateListId(listId)
    validateArchived(archived)

    return User.findById(userId)
        .then(user =>{
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)
        
            return List.findById(listId)
        })
        .then(list => {
            if (!list) throw new ExistenceError(`List with id ${listId} not found`)
            
            if (list.user.toString() !== userId) throw new CoherenceError(`List with id ${listId} does not belong to user  with id ${userId}`)
            
            list.archived = archived

            return list.save()
        })

}

module.exports = archiveList
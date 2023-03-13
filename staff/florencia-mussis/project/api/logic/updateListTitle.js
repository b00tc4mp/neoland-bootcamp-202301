const { validateUserId, validateListId, validateTitle, ExistenceError, CoherenceError } = require('com')
const { User, List } = require('../data/models')

function updateListTitle(userId, listId, title) {
    validateUserId(userId)
    validateListId(listId)
    validateTitle(title)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError (`User with id ${userId} not found`)

            return List.findById(listId)
        })
        .then(list => {
            if (!list)throw new ExistenceError(`List with id ${listId} not found`)
            
            if (list.user.toString() !== userId) throw new CoherenceError(`List with id ${listId} does not belong to user  with id ${userId}`)
          
            list.title = title

            return list.save()
        })
    }

module.exports = updateListTitle
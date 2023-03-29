const { validateUserId, validateListId, validateItemId, validateText, ExistenceError, CoherenceError } = require('com')
const { User, List } = require('../data/models')

function updateItemText(userId, listId, itemId, text) {
    validateUserId(userId)
    validateListId(listId)
    validateItemId(itemId)
    validateText(text)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError (`User with id ${userId} not found`)

            return List.findById(listId)
        })
        .then(list => {
            if (!list)throw new ExistenceError(`List with id ${listId} not found`)
            
            if (list.user.toString() !== userId) throw new CoherenceError(`List with id ${listId} does not belong to user  with id ${userId}`)
          
            const item = list.items.find(item => item._id.toString() === itemId)
            
            if (!item)throw new ExistenceError(`Item with id ${itemId} not found`)

            item.text = text

            return list.save()
        })
    }


module.exports = updateItemText
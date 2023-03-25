const { validateUserId, validateListId, validateItemId, validateChecked, ExistenceError, CoherenceError } = require('com')
const { User, List } = require('../data/models')

function updateItemCheck(userId, listId, itemId, checked) {
    validateUserId(userId)
    validateListId(listId)
    validateItemId(itemId)
    validateChecked(checked)

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

            item.checked = checked

            return list.save()
        })
    }


module.exports = updateItemCheck
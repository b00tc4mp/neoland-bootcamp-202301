const { validateUserId, validateListId, validateText, validateChecked, ExistenceError } = require('com')
const { User, List, Item } = require('../data/models')

/**
 * Creates a new item in the list
 * 
 * @param {string} userId The userId the user belongs to
 * @param {string} listId The listId the list belongs to
 * @param {string} text The text of the item
 * @param {string} checked The checked of the item
 */
function createItem(userId, listId, text, checked) {
    validateUserId(userId)
    validateListId(listId)
    validateText(text)
    validateChecked(checked)

    return Promise.all([
        User.findById(userId),
        List.findById(listId)
    ])
        .then(([user, list]) => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            if (!list) throw new ExistenceError(`List with id ${listId} not found`)

            const item = new Item({
                text,
                checked
            })

            list.items.push(item)

            return list.save()
        })
}

module.exports = createItem
const { validateUserId, validateListId, CoherenceError, ExistenceError} = require('com')
const { User, List } = require('../data/models')

/**
 * Retrieves the selected list
 * 
 * @param {string} userId The user id
 * @param {string} listId The list id
 */
function retrieveList(userId, listId) {
    validateUserId(userId)
    validateListId(listId)


    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            return List.findById(listId).lean()
                .then(list => {
                    if (!list) throw new ExistenceError(`List with id ${listId} not found`)

                    if (!list.shared && list.user._id.toString() !== userId ) throw new CoherenceError(`The list with id ${listId} does not belong to user  with id ${userId}`)

                    if (list._id) {
                        list.id = list._id.toString()
                        delete list._id
                    }

                    if (list.user) {
                        list.user = list.user.toString()
                    }

                    delete list.__v

                    list.items.forEach(items => {
                        items.id = items._id.toString()
                        delete items._id
                    })


                    list.itemsTotalChecked = list.items.reduce((accum, elem) => accum + (elem.checked? 1 : 0), 0)
                    
                    list.itemsTotalCount = list.items.length

                    list.items.sort((itemA, itemB) => {
                        if (itemA.checked && !itemB.checked) return 1
                        else if (itemB.checked && !itemA.checked) return -1
                        else return 0
                    })

                    return list
                })

        })
}

module.exports = retrieveList
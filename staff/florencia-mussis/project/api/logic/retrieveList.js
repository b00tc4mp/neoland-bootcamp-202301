const { validateUserId, ExistenceError, validateListId } = require('com')
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
                        delete items._id})


                    return list //titulo
                })

        })
}

module.exports = retrieveList
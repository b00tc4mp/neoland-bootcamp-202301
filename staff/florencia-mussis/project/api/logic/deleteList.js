const { validateUserId, validateListId, ExistenceError, CoherenceError } = require('com')
const { User, List } = require('../data/models')
const { Types: { ObjectId }} = require('mongoose')
/**
 * Deletes the specified list by id that belongs to the specified user (by userId)
 * 
 * @param {string} userId The userId address of the user
 * @param {string} listId The list id of the list
 */
function deleteList(userId, listId) {
    validateUserId(userId)
    validateListId(listId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            return List.findById(listId)
        })
        .then(list => {
            if (!list) throw new ExistenceError(`List with id ${listId} not found`)

            if (list.user.toString() !== userId) throw new CoherenceError(`List with id ${listId} does not belong to user with id ${userId}`)

            return List.deleteOne({ _id: new ObjectId(listId) })
        })
}

module.exports = deleteList
const { validateUserId, validateListId, validateEmail, validateMode, ExistenceError } = require('com')
const { User, List, Shared } = require('../data/models')

/**
 * Creates a new item in the list
 * 
 * @param {string} userId The userId
 * @param {string} listId The listId the list belongs to
 */
function shareList(userId, listId, email, mode) {
    validateUserId(userId)
    validateListId(listId)
    validateEmail(email)
    validateMode(mode)

    return Promise.all([
        User.findById(userId),
        List.findById(listId),
        User.findOne({ email })
    ])
        .then(([user, list, userToShareListWith]) => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            if (!list) throw new ExistenceError(`List with id ${listId} not found`)

            if (!userToShareListWith) throw new ExistenceError(`User with email ${email} not found`)

            if (list.user._id.toString() !== userId)
                throw new CoherenceError(`The user with id ${userId} is not the owner of list with id ${listId}`)

            let shared = list.shareds.find(shared => shared.user._id.toString() === userToShareListWith.id)

            if (shared) throw new ExistenceError(`The list is already shared with the user with id ${userToShareListWith.id}`)

            shared = new Shared({
                user: userToShareListWith.id,
                mode
            })

            list.shareds.push(shared)

            return list.save()
        })
}

module.exports = shareList
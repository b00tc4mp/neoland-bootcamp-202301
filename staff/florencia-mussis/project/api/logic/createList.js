const { validateUserId, ExistenceError } = require('com')
const { User, List } = require('../data/models')

/**
 * Creates a new list 
 * 
 * @param {string} userId The userId the list belongs to
 */
function createList(userId) {
    validateUserId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            const list = new List({
                user: userId,
                title: 'New list'
            })
            return list.save()
        })
}

module.exports = createList
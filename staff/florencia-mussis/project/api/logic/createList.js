const { validateUserId, validateTitle, ExistenceError } = require('com')
const { User, List } = require('../data/models')

/**
 * Creates a new list in the database
 * 
 * @param {string} userId The userId the list belongs to
 * @param {string} title The title of the list
 */
function createList(userId, title){
    validateUserId(userId)
    validateTitle(title)
   
    return User.findById(userId)
    .then(user => {
        if (!user) throw new ExistenceError(`User with id ${userId} not found`)

        const list = new List ({
            user: userId,
            title
        })

        return list.save()
    })    
}

module.exports = createList
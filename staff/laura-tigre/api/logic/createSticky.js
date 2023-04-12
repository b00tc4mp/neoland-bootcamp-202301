const { validateUserId, validateText, validateVisibility,ExistenceError } = require('com')
const { User, Sticky } = require('../data/models')



/**
 * Creates a new sticky in the database
 * 
 * @param {string} email The user the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(userId, text, visibility) {
    validateUserId(userId)
    validateText(text)
    validateVisibility(visibility)
    
    return User.findById((userId))
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            const sticky =  new Sticky({
                user: userId,
                text,
                visibility,
                likes: []
            })

            return sticky.save()
        })
}
module.exports = createSticky

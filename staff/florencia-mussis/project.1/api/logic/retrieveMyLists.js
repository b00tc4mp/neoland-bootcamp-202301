const { Types: { ObjectId } } = require('mongoose')
const { validateUserId, ExistenceError } = require('com')
const { User, List } = require('../data/models')
/**
 * Retrieves the lists that belong to the specified user (email)
 * 
 * @param {string} userId The userId of the user to retrieve the lists 
 * 
 * @return {Array} The lists that belong to the specified user
 */
function retrieveMyLists(userId) {
    validateUserId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        List.find({ user: new ObjectId(userId) }).lean()
    ])
        .then(([user, lists]) => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            lists.forEach(list => {
                if (list._id) {
                    list.id = list._id.toString()
                    delete list._id

                    delete list.__v
                    delete list.user

                    list.itemsTotalChecked = list.items.reduce((accum, elem) => accum + (elem.checked ? 1 : 0), 0)
                    
                    list.itemsTotalCount = list.items.length

                    delete list.items
                }

            })

            return lists
        })
}

module.exports = retrieveMyLists
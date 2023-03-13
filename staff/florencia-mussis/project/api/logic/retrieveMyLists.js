const { Types: { ObjectId } } = require('mongoose')
const { validateUserId, ExistenceError } = require('com')
const { User, List } = require('../data/models')
/**
 * Retrieves the lists that belong to the specified user (email)
 * 
 * @param {string} userId The userId of the user to retrieve the lists from
 * 
 * @return {Array} The lists that belong to the specified user
 */
function retrieveMyLists(userId) {
    validateUserId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        List.find({ user: new ObjectId(userId) }).populate({ path: 'user', select: 'name' }).lean()
    ])
        .then(([user, lists]) => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            lists.forEach(list => {
                // sanitize

                if (list._id) {
                    list.id = list._id.toString()
                    delete list._id

                    delete list.__v
                }

                if (list.user._id) {
                    list.user.id = list.user._id.toString()
                    delete list.user._id
                }

            })

            return lists
        })
}

module.exports = retrieveMyLists
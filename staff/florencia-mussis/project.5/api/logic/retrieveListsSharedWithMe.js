const { validateUserId, ExistenceError } = require('com')
const { User, List } = require('../data/models')

/**
* Retrieves lists shared with the specified user
*
* @param {string} userId The user ID of the user to retrieve the lists
*/
function retrieveListsSharedWithMe(userId) {
    validateUserId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        List.find({ 'shareds.user': userId }).populate({ path: 'user', select: 'name' }).lean()
    ])
        .then(([user, lists]) => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            lists.forEach(list => {
                if (list._id) {
                    list.id = list._id.toString()
                    delete list._id

                    delete list.__v

                    if (list.user._id) {
                        list.user.id = list.user._id.toString()
                        delete list.user._id
                    }

                    list.itemsTotalChecked = list.items.reduce((accum, elem) => accum + (elem.checked ? 1 : 0), 0)

                    list.itemsTotalCount = list.items.length

                    delete list.items
                }
            })
            return lists
        })
}

module.exports = retrieveListsSharedWithMe
const { validateUserId, validateTitle, ExistenceError } = require('com')
const { User, List } = require('../data/models')

/**
 * Search a list
 *
 * @param {string} userId The id of the user
 * @param {string} title The title by which to search a list
 */
function searchList(userId, title) {
    validateUserId(userId)
    validateTitle(title)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`User with id ${userId} not found`)

            return List.find({ user: userId, title: { "$regex": title, "$options": "i" } }).lean()
                .then(lists => {
                    lists.forEach(list => {
                        if (list._id) {
                            list.id = list._id.toString()
                            delete list._id
                        }

                        if (list.user) {
                            list.user = list.user.toString()
                        }

                        delete list.__v

                        const items = list.items

                        items.forEach(item => {
                            if (item._id) {
                                item.id = item._id.toString()
                                delete item._id
                            }
                        })

                        list.itemsTotalChecked = list.items.reduce((accum, elem) => accum + (elem.checked ? 1 : 0), 0)

                        list.itemsTotalCount = list.items.length
                    })
                    return lists
                })
        })
}

module.exports = searchList
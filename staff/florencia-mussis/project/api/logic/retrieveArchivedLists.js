const { validateUserId, ExistenceError } = require('com')
const { User, List} = require('../data/models')
const { Types: { ObjectId }} = require('mongoose')
/**
 * Retrieves the archived lists of the user
 * 
 * @param {string} userId The user id that requests the archived lists
 */
function retrieveArchivedLists(userId){
    validateUserId(userId)

    return Promise.all([
        User.findById(userId).lean(), 
        List.find({ user: new ObjectId(userId), archived: true }).populate({ path: 'user', select: 'name' }).lean()
])
    .then(([user, lists]) => {
        if (!user) throw new ExistenceError(`User with id ${userId} not found`)

        lists.forEach(list => {
            if (list._id) {
                list.id = list._id.toString()
                delete list._id

                delete list.__v
                delete list.shared

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

module.exports = retrieveArchivedLists
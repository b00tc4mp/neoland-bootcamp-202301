const { validateUserId, validateStickyId } = require('com')
const { User, Sticky } = require('../data/models')
const { Types: { ObjectId } } = require('mongoose')


function toggleLikeSticky(userId, stickyId) {
    validateUserId(userId)
    validateStickyId(stickyId)

    return User.findById((userId))
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)


            return Sticky.findById((stickyId))
        })
        .then(sticky => {

            if (!sticky) throw new Error(`sticky with id '${stickyId}s' not found`)
            const index = sticky.likes.indexOf(userId)

            index > -1 ? sticky.likes.splice(index, 1) : sticky.likes.push(userId)

            return Sticky.updateOne({ _id: new ObjectId(stickyId) }, { $set: { likes: sticky.likes } })

        })

}
module.exports = toggleLikeSticky
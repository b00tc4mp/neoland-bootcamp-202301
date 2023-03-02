const { ObjectId } = require('mongodb')
const { validateUserId, validateStickyId , validateText} = require('com')



function updateStickyText(userId, stickyId, text) {
    validateUserId(userId)
    validateStickyId(stickyId)
    validateText(text)
   

    const users = process.db.collection('users')
    const stickies = process.db.collection('stickies')

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)


            return stickies.findOne({ _id: new ObjectId(stickyId) })


        })

        .then(sticky => {
            if (!sticky)
                throw new Error('sticky with id ' + stickyId + ' not found')

            if (sticky.user !== userId)
                throw new Error('sticky with id ' + stickyId + ' does not belong to user with id ' + userId)

            return stickies.updateOne({ _id: new ObjectId(stickyId) }, { $set: { text } })
        })
}

module.exports = updateStickyText
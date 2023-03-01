const { ObjectId } = require('mongodb')
const { validateUserId } = require('com')


function retrieveUser(userId) {
    validateUserId(userId)
    const users = process.db.collection('users')

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            
            //sanitization
            delete user._id
            delete user.password

            return user
        })
}

module.exports = retrieveUser
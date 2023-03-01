const { ObjectId } = require('mongodb')
const { validateUserId, validatePassword } = require('com')

function unregisterUser(userId, password) {
    validateUserId(userId)
    validatePassword(password)
    /* 1. read db by userId*/
    const users = process.db.collection('users')
    const stickies = process.db.collection('stickies')

    /*2. check if user passed password  3. if not, then error*/
    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error (`user with id ${userId} not found`)

            if (user.password !== password) throw new Error('wrong credentials')

            return stickies.deleteMany({ "user": userId })
                /* 4. if yes, then delete user from db and its stickies*/
                .then(() => {
                    return users.deleteOne({_id: new ObjectId(userId)})
                })
        })
}

module.exports = unregisterUser
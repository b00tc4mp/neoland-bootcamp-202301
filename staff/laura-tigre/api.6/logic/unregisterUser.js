
const { validateUserId, validatePassword } = require('com')
const { ObjectId } = require('mongodb')


function unregisterUser(userId, password) {
    validateUserId(userId)
    validatePassword(password)

    
    const users = process.db.collection('users')
    const stickies = process.db.collection('stickies')

    const filter = { _id: new ObjectId(userId) }

    return users.findOne(filter)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)
            if (user.password !== password) throw new Error('wrong credentials')
            
            return stickies.deleteMany({ 'user': userId })
                .then(() => { return users.deleteOne(filter)})

        })




}
module.exports = unregisterUser
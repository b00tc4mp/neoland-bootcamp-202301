const { ObjectId } = require('mongodb')
const { isEmail , validatePassword} = require("com")

function updateUserEmail(userId, newEmail, password) {
    if (typeof userId!== 'string') throw new Error('userId must be a string')
    if (typeof newEmail !== 'string') throw new Error('New email must be a string')
    isEmail(newEmail)
    validatePassword(password)
    

    const users = process.db.collection('users')

    const filter = { _id: new ObjectId(userId) }

    return users.findOne(filter)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            if (user.password !== password) throw new Error('wrong credentials')

            return users.updateOne(filter, { $set: { email: newEmail } })
        })
}

module.exports = updateUserEmail
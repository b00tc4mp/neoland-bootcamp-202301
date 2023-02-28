const { ObjectId } = require('mongodb')

function unregisterUser(userId, password) {
    // TODO
    /*
    1. read db by userId
    2. check if user passed password
    3. if not, then error
    4. if yes, then delete user from db and its stickies
    */
    const users = process.db.collection('users')

    const filter = { _id: new ObjectId(userId) }

    return users.findOne(filter)
        .then(user => {
            if (!user) throw new Error('user not found')

            if (user.password !== password) throw new Error('wrong credentials')

            return users.deleteOne(filter)
        })
        .then(() => {
            const stickies = process.db.collection('stickies')

            return stickies.deleteMany({ user: userId })
        })
}


module.exports = unregisterUser
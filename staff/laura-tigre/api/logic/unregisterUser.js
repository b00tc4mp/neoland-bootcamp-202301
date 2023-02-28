
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
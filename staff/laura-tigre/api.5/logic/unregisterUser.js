
const { ObjectId } = require('mongodb')


function unregisterUser(userId, password) {
    if(typeof userId !== 'string' )throw new Error ('userId is not a string')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (password.length < 8) throw new Error('password is shorter than 8 characters')

    
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
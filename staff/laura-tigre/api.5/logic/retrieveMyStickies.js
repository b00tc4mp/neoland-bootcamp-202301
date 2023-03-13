const {ObjectId} =require('mongodb')

function retrieveMyStickies(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')

    const stickies = process.db.collection('stickies')
    const users = process.db.collection('users')
    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)


            return stickies.find({ user: userId }).toArray()
        })
}
module.exports = retrieveMyStickies
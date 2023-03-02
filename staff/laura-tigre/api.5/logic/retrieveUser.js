const { ObjectId } = require('mongodb')

function retrieveUser(userId) {
    if(typeof userId !== 'string' )throw new Error ('userId is not a string')
    
    const users = process.db.collection('users')

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            delete user._id
            delete user.password

            return user

        })


}

module.exports = retrieveUser

const { ObjectId } = require('mongodb')

function unregisterUser(userId, password) {
    /* 1. read db by userId*/
    const users = process.db.collection('users')
    const stickies = process.db.collection('stickies')

    /*2. check if user passed password  3. if not, then error*/
    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (user.password !== password) throw new Error('wrong credentials')

            return stickies.deleteMany({ "user": userId })
                /* 4. if yes, then delete user from db and its stickies*/
                .then(() => {
                    return users.deleteOne({
                        _id: new ObjectId(userId)
                    })
                })
        })º
}

module.exports = unregisterUser
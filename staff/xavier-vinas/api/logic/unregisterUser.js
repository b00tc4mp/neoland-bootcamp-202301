const { ObjectId } = require('mongodb')



function unregisterUser(userId, password) {

    const users = process.db.collection('users')
    const stickies = process.db.collection('stickies')


    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (user.password !== password) throw new Error('wrong credentials')

            return stickies.deleteMany({ "user": userId })

                .then(() => {
                    return users.deleteOne({
                        _id: new ObjectId(userId)
                    })
                })
        })
}



module.exports = unregisterUser
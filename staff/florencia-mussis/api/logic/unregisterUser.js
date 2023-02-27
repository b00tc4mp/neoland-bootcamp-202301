const {ObjectId} = require('mongodb')

function unregisterUser(userId, password) {
    /* 1. read db by userId*/ 
    const users = process.db.collection('users')

     /*2. check if user passed password  3. if not, then error*/ 
    return users.findOne({ _id: new ObjectId(userId)})
        .then(user => {
            if (user.password !== password) throw new Error ('wrong credentials')

               /* 4. if yes, then delete user from db and its stickies*/ 
       
            return users.deleteOne({_id:new ObjectId (userId)})
        })       
}

module.exports = unregisterUser
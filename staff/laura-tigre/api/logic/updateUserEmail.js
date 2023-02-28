const {ObjectId} =require('mongodb')
function updateUserEmail(userId, password, newEmail) {

       const users= process.db.collection('users')
    
       return users.findOne({_id : new ObjectId(userId)})
       .then (user =>{
        if(!user) throw new Error ('user not found')
        if(user.password !== password)throw new Error ('wrong credentials')
        return users.updateOne({_id: new ObjectId(userId)}, { $set : {email : newEmail}})
       })
       
    
    
}
module.exports = updateUserEmail
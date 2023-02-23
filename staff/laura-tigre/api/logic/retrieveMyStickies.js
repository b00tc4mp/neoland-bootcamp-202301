function retrieveMyStickies(userId) {
    
    const stickies = process.db.collection('stickies')
    return stickies.find({user:userId}).toArray()
   
    
}
module.exports=retrieveMyStickies
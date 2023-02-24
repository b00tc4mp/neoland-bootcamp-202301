const{ObjectId} = require ('mongodb')

function deleteSticky( userId, stickyId){
 
    const stickies = process.db.collection('stickies')


    return stickies.findOne({_id: new ObjectId(stickyId)})
    .then(sticky=> {

      if(!sticky) throw new Error(`sticky with id '${stickyId}s' not found`)
      if(sticky.user !== userId) throw new Error(`sticky with id '${stickyId}s' does not belong to user with id '${userId}'`)

      return stickies.deleteOne({_id: new ObjectId(stickyId)})
    })
      
   }

   module.exports = deleteSticky
// function deleteSticky(userId, stickyId) {
   
  

//    var foundStickyIndex = stickies.findIndex(sticky => sticky.id === stickyId)
//    if (foundStickyIndex < 0) throw new Error("sticky with id '" +stickyId+ "' not found")

//    var sticky = stickies[foundStickyIndex]
//    if (sticky.user !== userId) throw new Error("sticky with id '" + stickyId +"' does not belong to user with email '"+ userId +"'")

//    stickies.splice(foundStickyIndex, 1)
// }


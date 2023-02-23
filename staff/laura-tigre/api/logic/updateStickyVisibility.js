const{ObjectId} = require('mongodb')

function updateStickyVisibility( userId, stickyId, visibility){
  //    TODO userId
    const stickies = process.db.collection('stickies')

    return stickies.updateOne({_id: new ObjectId(stickyId)}, {$set:{visibility}})
}

module.exports= updateStickyVisibility
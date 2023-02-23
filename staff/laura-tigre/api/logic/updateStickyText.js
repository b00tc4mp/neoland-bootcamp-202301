const {ObjectId}= require('mongodb')
/**
 * Retrieves the public stickies from all users that publish them
 * 
 * @return {Array} The public stickies
 */
function updateStickyText(userId, stickyId, text) {
    // TODO validate user
    const stickies = process.db.collection('stickies')

    return stickies.updateOne({_id:new ObjectId(stickyId)}, {$set: {text}})
}


module.exports = updateStickyText

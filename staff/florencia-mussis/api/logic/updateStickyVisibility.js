const { ObjectId } = require('mongodb')

/**
 * Retrieves the public stickies from all users that publish them
 * 
 * @return {Array} The public stickies
 */
function updateStickyVisibility(userId, stickyId, visibility){
    const stickies = process.db.collection('stickies')

    const data = {}

    return stickies.updateOne({'_id':new ObjectId (stickyId)}, {$set: {visibility}})
}

module.exports = updateStickyVisibility
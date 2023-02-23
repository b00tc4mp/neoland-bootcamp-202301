/**
 * Creates a new sticky in the database
 * 
 * @param {string} email The user the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(userId, text, visibility) {
    const stickies= process.db.collection('stickies')


    const sticky = {
        user: userId,
        text,
        visibility,
        likes: []
    }
    
    return stickies.insertOne(sticky)

}
module.exports=createSticky

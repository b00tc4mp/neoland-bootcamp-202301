/**
 * Retrieves the public stickies from all users that publish them
 * 
 * @return {Array} The public stickies
*/

function retrieveMyStickies(userId){
    const stickies = process.db.collection('stickies')

    return stickies.find({user: userId}).toArray()
}

module.exports = retrieveMyStickies
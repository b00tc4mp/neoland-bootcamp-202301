/**
 * Retrieves the public stickies from all users that publish them
 * 
 * @return {Array} The public stickies
*/

function retrievePublicStickies(){
    const stickies = process.db.collection('stickies')

    return stickies.find({ visibility:'public'}).toArray()
}

module.exports = retrievePublicStickies
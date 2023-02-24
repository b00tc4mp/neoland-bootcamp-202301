/**
 * Retrieves the stickies that belong to the specified user (email)
 * 
 * @param {string} userId The userId of the user to retrieve the stickies from
 * 
 * @return {Array} The stickies that belong to the specified user
 */
function retrieveMyStickies(userId) {
    const stickies = process.db.collection('stickies')

    return stickies.find({ user: userId }).toArray()
}

module.exports = retrieveMyStickies
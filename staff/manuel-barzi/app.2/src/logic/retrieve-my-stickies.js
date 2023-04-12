import stickies from '../data/stickies'

/**
 * Retrieves the stickies that belong to the specified user (email)
 * 
 * @param {string} userId The userId of the user to retrieve the stickies from
 * 
 * @return {Array} The stickies that belong to the specified user
 */
function retrieveMyStickies(userId) {
    var myStickies = []

    for (var i = 0; i < stickies.length; i++) {
        var sticky = stickies[i]

        if (sticky.user === userId) 
            myStickies.push(sticky)
    }

    return myStickies.reverse()
}

export default retrieveMyStickies
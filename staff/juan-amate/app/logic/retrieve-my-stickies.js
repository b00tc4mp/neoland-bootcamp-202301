/**
 * Retrieves the user´s stickies.
 * @param {string} userId The user id of the user to retrieve the stickies
 * @return {Array} The stickies that belong to the specified user
 */
function retrieveMyStickies(userId) {
    const myStickies = []

    for (var i = 0; i < stickies.length; i++) {
        const sticky = stickies[i]

        if (sticky.user === userId)
            myStickies.push(sticky)
    }

    return myStickies.reverse()
}
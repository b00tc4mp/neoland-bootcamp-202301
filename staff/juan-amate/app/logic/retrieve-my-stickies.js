/**
 * Retrieves the user´s stickies.
 * 
 * @param {string} email 
 * @return {Array} The stickies that belong to the specified user(email)
 */
function retrieveMyStickies(email) {
    var user = users.find(user => user.email === email)

    if (!user) throw new Error(`user with email ${email} not found`)

    var myStickies = []
    for (var i = 0; i < stickies.length; i++) {
        var sticky = stickies[i]

        if (sticky.user === email)
            myStickies.push(sticky)
    }
    return myStickies.reverse()
}
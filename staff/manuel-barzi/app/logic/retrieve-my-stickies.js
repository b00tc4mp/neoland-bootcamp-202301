/**
 * Retrieves the stickies that belong to the specified user (email)
 * 
 * @param {string} email The email of the user to retrieve the stickies from
 * 
 * @return {Array} The stickies that belong to the specified user
 */
function retrieveMyStickies(email) {
    var userFound = false

    for (var i = 0; i < users.length && !userFound; i++) {
        var user = users[i]

        if (user.email === email) userFound = true
    }

    if (!userFound) throw new Error('user with email '  + email + ' not found')

    var myStickies = []

    for (var i = 0; i < stickies.length; i++) {
        var sticky = stickies[i]

        if (sticky.user === email) 
            myStickies.push(sticky)
    }

    return myStickies.reverse()
}
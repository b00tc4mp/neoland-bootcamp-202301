/**
 * Authenticates a user against database
 * 
 * @param {string} email The user's email address
 * @param {string} password The user's password
 */
function authenticateUser(email, password) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        // if (user.email === email && user.password === password) {
        //     return
        // }

        // if (user.email === email && user.password === password) 
        //     return

        if (user.email === email && user.password === password) return
    }

    throw new Error('wrong credentials')
}

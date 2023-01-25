/**
 * 
 * @param {string} email the user email that I registered
 * @param {string} password the user pasword that I registered
 */
function authenticateUser(email, password) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        if (user.email === email && user.password === password) return
    }
    throw new Error('wrong credential')
}
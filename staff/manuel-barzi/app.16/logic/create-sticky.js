/**
 * Creates a new sticky in the database
 * 
 * @param {string} email The user e-mail the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(email, text, visibility) {
    const found = users.some(user => user.email === email)

    if (!found) throw new Error('user with email ' + email + ' not found')

    const sticky = {
        id: createStickyId(),
        user: email,
        text,
        visibility,
        likes: []
    }

    stickies.push(sticky)    
}
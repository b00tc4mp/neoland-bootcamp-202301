/**
 * Toggles the likeability of a specific sticky
 * 
 * @param {string} email The user's email address
 * @param {string} stickyId The sticky identifier
 */
function toggleLikeSticky(email, stickyId) {
    const found = users.some(user => user.email === email)

    if (!found) throw new Error('user with email ' + email + ' not found')

    const sticky = stickies.find(sticky => sticky.id === stickyId)

    if (!sticky) throw new Error('sticky with id ' + stickyId + ' not found')

    const index = sticky.likes.indexOf(email)

    if (index < 0)
        sticky.likes.push(email)
    else
        sticky.likes.splice(index, 1)
}
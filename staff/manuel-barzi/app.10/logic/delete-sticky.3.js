/**
 * Deletes the specified sticky by id that belongs to the specified user (by email)
 * 
 * @param {string} email The email address of the user
 * @param {string} stickyId The sticky id of the sticky
 */
function deleteSticky(email, stickyId) {
    var userFound = users.some(user => user.email === email)

    if (!userFound) throw new Error('user with email ' + email + ' not found')

    var foundStickyIndex = stickies.findIndex(sticky => sticky.id === stickyId)

    if (foundStickyIndex < 0) throw new Error('sticky with id ' + stickyId + ' not found')

    stickies.splice(foundStickyIndex, 1)
}
/**
 * Deletes the specified sticky by id that belongs to the specified user (by email)
 * 
 * @param {string} email The email address of the user
 * @param {string} stickyId The sticky id of the sticky
 */
function deleteSticky(email, stickyId) {
    // var foundStickyIndex

    // for (var i = 0; i < stickies.length && foundSticky === undefined; i++) {
    //     var sticky = stickies[i]

    //     if (sticky.id === stickyId) foundStickyIndex = i
    // }

    var foundStickyIndex = stickies.findIndex(sticky => sticky.id === stickyId)

    stickies.splice(foundStickyIndex, 1)
}
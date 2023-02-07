/**
 * Toggles the likeability of a specific sticky
 * 
 * @param {string} email The user's email address
 * @param {string} stickyId The sticky identifier
 */
function toggleLikeSticky(email, stickyId) {
    // buscar sticky por id
    // poner email en array de likes en el sticky
    const sticky = stickies.find(sticky => sticky.id === stickyId)

    sticky.likes.push(email)
}
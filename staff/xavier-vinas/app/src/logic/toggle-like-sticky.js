import stickies from '../data/stickies'

/**
 * Toggles the likeability of a specific sticky
 * 
 * @param {string} userId The userId
 * @param {string} stickyId The sticky identifier
 */
function toggleLikeSticky(userId, stickyId) {
    const sticky = stickies.find(sticky => sticky.id === stickyId)

    if (!sticky) throw new Error('sticky with id ' + stickyId + ' not found')

    const index = sticky.likes.indexOf(userId)

    if (index < 0)
        sticky.likes.push(userId)
    else
        sticky.likes.splice(index, 1)
}

export default toggleLikeSticky
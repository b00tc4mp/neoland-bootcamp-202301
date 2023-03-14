import stickies from '../data/stickies'

/**
 * Toggles the likeability of a specific sticky
 * 
 * @param{string} userId The user id
 *  @param{string} stickyId The sticky identifier
 */
function toggleLikeSticky(userId, stickyId) {
    const sticky = stickies.find(sticky => sticky.id === stickyId)

    if (!sticky) throw new Error('sticky with id ' + stickyId + ' not found')

    const index = sticky.likes.indexOf(userId)

    index > -1 ? sticky.likes.splice(index, 1) : sticky.likes.push(userId)
}

export default toggleLikeSticky
import stickies from '../data/stickies'

/**
 * Deletes the specified sticky by id that belongs to the specified user (by userId)
 * 
 * @param {string} userId The userId address of the user
 * @param {string} stickyId The sticky id of the sticky
 */
function deleteSticky(userId, stickyId) {
    var foundStickyIndex = stickies.findIndex(sticky => sticky.id === stickyId)

    if (foundStickyIndex < 0) throw new Error('sticky with id ' + stickyId + ' not found')

    var sticky = stickies[foundStickyIndex]

    if (sticky.user !== userId) throw new Error('sticky with id ' + stickyId + ' does not belong to user with userId ' + userId)

    stickies.splice(foundStickyIndex, 1)
}

export default deleteSticky
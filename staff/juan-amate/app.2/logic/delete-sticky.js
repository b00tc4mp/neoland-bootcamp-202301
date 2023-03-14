/**
 * Deletes the specified sticky by id that belongs to the specified user (by email)
 * 
 * @param {string} userId The id of the user
 * @param {string} stickyId The sticky id of the sticky
 */
function deleteSticky(userId, stickyId) {
  if (!userId) throw new Error('user with id ' + userId + ' not found')

  var foundStickyIndex = stickies.findIndex(sticky => sticky.id === stickyId)

  if (foundStickyIndex < 0) throw new Error('sticky with id ' + stickyId + ' not found')

  var sticky = stickies[foundStickyIndex]

  if (sticky.user !== userId) throw new Error('sticky with id ' + stickyId + ' does not belong to user with id ' + userId)

  stickies.splice(foundStickyIndex, 1)
}
/**
 * Creates a new sticky 
 * 
 * @param {string} userId The user e-mail the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(userId, text, visibility) {
  const sticky = {
    id: createStickyId(),
    user: userId,
    text,
    visibility,
    likes: []
  }

  stickies.push(sticky)
}
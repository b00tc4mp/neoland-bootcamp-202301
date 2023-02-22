import stickies from "../data/stickies"

/**
 * Deletes the specified sticky by id that belongs to the specified user (by email)
 * 
 * @param {string} userId The email address of the user
 * @param {string} stickyId The sticky id of the sticky
 */
function deleteSticky(userId, stickyId) {

  var foundStickyIndex = stickies.findIndex(sticky => sticky.id === stickyId)
  if (foundStickyIndex < 0) throw new Error('sticky with id ' + stickyId + ' not found')

  var sticky = stickies[foundStickyIndex]
  if (sticky.user !== userId) throw new Error('sticky with id ' + stickyId + ' does not belong to user with email ' + userId)

  stickies.splice(foundStickyIndex, 1)
}
export default deleteSticky

/*function deleteSticky(email, stickyId) {
    var userExists = false;
  
    for (var i = 0; i < users.length && !userExists; i++) {
      var user = users[i];
  
      if (user.email === email) userExists = true;
    }
  
    if (!userExists) throw new Error(`user with email '${email}' not found`);
  
    var stickyIndex;
  
    for (var i = 0; i < stickies.length && stickyIndex === undefined; i++) {
      var sticky = stickies[i];
  
      if (sticky.id === stickyId) stickyIndex = i;
    }
  
    if (stickyIndex === undefined)
      throw new Error(`sticky with id '${stickyId}' not found`);
  
    var stickyFound = stickies[stickyIndex];
  
    if (stickyFound.user !== email) {
      throw new Error(
        `sticky with id '${stickyId}' does not belong to user with email '${email}'`
      );
    }
  
    for (var i = stickyIndex; i < stickies.length - 1; i++) {
      stickies[i] = stickies[i + 1];
    }
   
  
    stickies.length--; */

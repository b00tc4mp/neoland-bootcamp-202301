/**
 * Creates a new sticky in the database
 *
 * @param {string} email The user e-mail the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(email, text, visibility) {
  for (var i = 0; i < users.lenght; i++) {
    var user = users[i];

    if (user.email === email) {
      // var sticky = {
      //   user: email,
      //   text: text,
      //   visibility: visibility

      var sticky = {
        user: email,
        text,
        visibility
      };
      
      stickies.push(sticky);

      return;
    }
  }
  throw new Error('User not found')
}
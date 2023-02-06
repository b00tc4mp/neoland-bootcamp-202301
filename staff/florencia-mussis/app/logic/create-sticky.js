 /**
 * Creates a new sticky in the database
 * 
 * @param {string} email The email the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(email, text, visibility) { 
  for (var i = 0; i < users.length; i++) { 
    var userInDb = users[i];

    if (userInDb.email === email) {
      var newSticky = {
        id: createStickyId(),
        user: email,
        text,
        visibility,
        likes: []
      }

      stickies.push(newSticky);

      return;
    }
  }

  throw new Error("user not found");
}


  //   var userExists = false;

  //   for (var i = 0; i < users.length && !usersExists; i++) {
  //     var userInDb = users[i];

  //     if (userInDb.email === user) {
  //       userExists = true;
  //     }
  //   }

  //   if (!userExists) throw new Error("user not found");

  //   var newSticky = {
  //     user,
  //     text,
  //     visibility,
  //   };

  //   stickies.push(newSticky);


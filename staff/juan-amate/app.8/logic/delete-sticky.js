function deleteSticky(email, stickyId) {
  var userExists = false;

  for (var i = 0; i < users.length && !userExists; i++) {
    // iteramos mientras queden usuarios y el usuario NO EXISTA
    var user = users[i];

    if (user.email === email) userExists = true;
  }

  //if (!userExists) throw new Error("user with email " + email + " not found");
  if (!userExists) throw new Error(`user with email '${email}' not found`);

  var stickyIndex;

  for (var i = 0; i < stickies.length && stickyIndex === undefined; i++) {
    // iteramos mientras queden stickies o el indice de sticky sea indefinido y no tenga numero (incluido el 0)
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
  // sobreescribimos el sticky siguiente sobre la posición del actual para dejar nuestro sticky el ultimo
  for (var i = stickyIndex; i < stickies.length - 1; i++) {
    stickies[i] = stickies[i + 1];
  }
  // cortamos el array de stickies eliminando la ultima posicion
  // stickies.length = stickies.length - 1;
  stickies.length--;
}
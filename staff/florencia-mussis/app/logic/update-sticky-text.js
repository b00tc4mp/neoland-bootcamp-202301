function updateStickyText(email, stickyId, text) {
  // TODO
  /*
    buscar usuario con ese email (si no existe, error)
    buscar sticky con ese sticky id (si no existe, error)
    comprobar que el email coincide con el sticky user (si no coincide, error)
    si todo lo anterior se cumple, entonces actualizar el sticky text con el texto nuevo
    */

  // function para cambiar el texto del sticky, para ello debemos comprobar que el usuario exista,
  // que el id del sticky tambien exista y que email coincide con el emailuser

  var userFound = false; // aun no hemos encontrado el usuario, por eso es falso

  for (var i = 0; i < users.length && !userFound; i++) {  //recorre el array y si encontro el usuario deja de recorrer la funcion y 
    var user = users[i];                                 // cambia el valor de userfoun por true y devuelve true, 
    if (user.email === email) userFound = true;         //frena el bucle pq no necesita seguir recorriendo el array pq ya lo encontró
  }

    //si no encontro
  if (!userFound) throw new Error("user with email " + email + " not found");

  var foundSticky //define una variable para el sticky encontrado, foundSticky es undefine y undefine es falso.

  for (var i = 0; i < stickies.length && !foundSticky; i++) { //recorre el array hasta que encuentre el sticky, cdo lo encuentra se detiene (sticky pasa de ser undefine a ser sticky)
    var sticky = stickies[i];                                 //y si no el bucle continua hasta el final la variable es undefine y al negarlo en verdadero, lanza el error 

    if (sticky.id === stickyId) foundSticky = sticky; 
  }

  if (!foundSticky) throw new Error("sticky with id " + stickyId + " not found");

  if (foundSticky.user !== email) //si encontre el sticky pero el usuario no es igual al mail que recibio por parametro.
    throw new Error(
      "sticky with id " + stickyId + " does not belong to user with email " + email
    );

  foundSticky.text = text;
}

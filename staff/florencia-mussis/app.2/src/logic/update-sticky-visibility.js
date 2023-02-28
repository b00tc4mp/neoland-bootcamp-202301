import stickies from '../data/stickies'

function updateStickyVisibility(userId, stickyId, visibility) {
    // TODO
    /*
      primer caso todo ok
      buscar usuario con ese userId (si no existe, error)
      buscar sticky con ese sticky id (si no existe, error)
      comprobar que el userId coincide con el sticky user (si no coincide, error)
      si todo lo anterior se cumple, entonces cambia la visibility
      */
  
    // function para cambiar la visibility del sticky, para ello debemos comprobar que el usuario exista,
    // que el id del sticky tambien exista y que userId coincide con el userIduser
  
     // aun no hemos encontrado el usuario, por eso es falso
 
      //si no encontro
  
    var foundSticky //define una variable para el sticky encontrado, foundSticky es undefine y undefine es falso.
  
    for (var i = 0; i < stickies.length && !foundSticky; i++) { //recorre el array hasta que encuentre el sticky, cdo lo encuentra se detiene (sticky pasa de ser undefine a ser sticky)
      var sticky = stickies[i];                                 //y si no el bucle continua hasta el final la variable es undefine y al negarlo en verdadero, lanza el error 
  
      if (sticky.id === stickyId) foundSticky = sticky; 
    }
  
    if (!foundSticky) throw new Error("Sticky with id " + stickyId + " not found");
  
    if (foundSticky.user !== userId) //si encontre el sticky pero el usuario no es igual al mail que recibio por parametro.
      throw new Error(
        "Sticky with id " + stickyId + " does not belong to user with id " + userId
      );
  
    foundSticky.visibility = visibility;
  }
  
  export default updateStickyVisibility
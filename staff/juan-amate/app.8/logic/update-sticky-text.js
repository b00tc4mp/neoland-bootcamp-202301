function updateStickyText(email, stickyId, text) {
    /*
    buscar usuario con ese email (si no existe, error)
    buscar sticky con ese sticky id (si no existe, error)
    comprobar que el email coincide con el sticky user (si no coincide, error)
    si todo lo anterior se cumple, entonces actualizar el sticky text con el nuevo texto
    */

    // creamos una variable con valor false
    var userFound = false
    //ciclo for que corta encuentra el usuario userFound=true o recorre todo el array
    for (var i = 0; i < users.length && !userFound; i++) {
        var user = users[i]
        
        if (user.email === email) userFound = true
    }
    // si no encuentra el usuario lanza el error
    if (!userFound) throw new Error('user with email ' + email + ' not found')

    // crear una variable con valor undefined
    var foundSticky
    // ciclo for que corta si recorre todo el array o el valor de foundSticky es !undefined
    for (var i = 0; i < stickies.length && !foundSticky; i++) {
        var sticky = stickies[i]

        if (sticky.id === stickyId) foundSticky = sticky
    }

    // si no encuentra el sitcky lanza el error
    if (!foundSticky) throw new Error('sticky with id ' + stickyId + ' not found')
    
    // si la propiedad user no es igual al email, lanza un error
    if (foundSticky.user !== email) throw new Error('sticky with id ' + stickyId + ' does not belong to user with email ' + email)

    // si todo falla, entonces el texto del foundSticky es igual al text
    foundSticky.text = text
}
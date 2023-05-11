function updateStickyText(email, stickyId, text) {
    /*
    buscar usuario con ese mail( si no existe, error)
    buscar sticky con ese stickyId (si no existe, error)
    comprobar que el mail coincide con el sticky user(si no coincide, error)
    si todo lo anterior se cumple puedo cambiar el sticky con el new text
    */
    // es falso porque aún no he encontrado el usuario
    var userFound = false
    //recorro el array de users y cuando encuentra el usuario se detiene el for
    for (var i = 0; i < users.length && !userFound; i++) {
        //llamamos a la variable user para contener el elemento que estamos pasando con el array

        var user = users[i]


        if (user.email === email) userFound = true

    }
    // si no encontró usuario en todo el array lanzó error
    if (!userFound) throw new Error('user with email' + email + 'not found')
    // no esta = false por que es un objeto
    var foundSticky

    for (var i = 0; i < stickies.length && !foundSticky; i++) {
        var sticky = stickies[i]

        if (sticky.id === stickyId) foundSticky = sticky

    }

    if (!foundSticky) throw new Error('sticky with id' + stickyId + 'not found')

    if (foundSticky.user !== email) throw new Error('sticky with id' + stickyId + 'does not belong to user with email ' + email)

    foundSticky.text = text

}
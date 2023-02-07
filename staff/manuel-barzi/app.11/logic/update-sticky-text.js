function updateStickyText(email, stickyId, text) {
    // TODO
    /*
    buscar usuario con ese email (si no existe, error)
    buscar sticky con ese sticky id (si no existe, error)
    comprobar que el email coincide con el sticky user (si no coincide, error)
    si todo lo anterior se cumple, entonces actualizar el sticky text con el texto nuevo
    */

    var userFound = false

    for (var i = 0; i < users.length && !userFound; i++) {
        var user = users[i]

        if (user.email === email) userFound = true
    }

    if (!userFound) throw new Error('user with email '  + email + ' not found')

    var foundSticky

    for (var i = 0; i < stickies.length && !foundSticky; i++) {
        var sticky = stickies[i]

        if (sticky.id === stickyId) foundSticky = sticky
    }

    if (!foundSticky) throw new Error('sticky with id ' + stickyId + ' not found')

    if (foundSticky.user !== email) throw new Error('sticky with id ' + stickyId + ' does not belong to user with email ' + email)

    foundSticky.text = text
}


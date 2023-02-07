function toggleLikeSticky(email, stickyId) {
    var found = users.some(user => user.email === email)

    var sticky = stickies.find(sticky => sticky.id === stickyId)

    if (!found) throw new Error('user with email ' + email + ' not found')
    
    if (!sticky) throw new Error("sticky with id " + stickyId + " not found")

    const index = sticky.likes.indexOf(email) //le pedimos la posicion de email
    
    index > -1 ? sticky.likes.splice(index, 1) : sticky.likes.push(email) //si lo encuentra, lo elimina con splice, si no (devuelve -1) lo introduce en el array de likes

    // if (index > -1) {
    //     sticky.likes.splice(index, 1)
    // } else {
    //     sticky.likes.push(email)
    // }
}
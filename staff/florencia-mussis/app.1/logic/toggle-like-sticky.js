function toggleLikeSticky(userId, stickyId) {
    var sticky = stickies.find(sticky => sticky.id === stickyId)

    if (!userId) throw new Error('user with userId ' + userId + ' not found')
    
    if (!sticky) throw new Error("sticky with id " + stickyId + " not found")

    const index = sticky.likes.indexOf(userId) //le pedimos la posicion de userId
    
    index > -1 ? sticky.likes.splice(index, 1) : sticky.likes.push(userId) //si lo encuentra, lo elimina con splice, si no (devuelve -1) lo introduce en el array de likes

    // if (index > -1) {
    //     sticky.likes.splice(index, 1)
    // } else {
    //     sticky.likes.push(userId)
    // }
}
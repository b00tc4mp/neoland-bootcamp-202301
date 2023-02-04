



function updateStickyVisibility ( email , stickyId, visibility){

    var user = users.find(user => user.email === email)
    var sticky = stickies.find(sticky => sticky.id === stickyId)

    if (!user ) throw new Error ( 'user with email ' + email + ' not found')

    if (sticky.user !== email) throw new Error(`sticky with id ${stickyId} does not belong to user with email ${email}`)

    if (sticky.id !== stickyId) throw new Error(`sticky with id ${stickyId} not found`)

    if (sticky.visibility === visibility) throw new Error(`sticky visibility with id ${stickyId} wrong`)
    


    stickies.visibility = visibility
}
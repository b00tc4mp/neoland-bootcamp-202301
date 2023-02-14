function updateStickyText(email, stickyId, text) {
   
    var user = users.find(user => user.email === email)

    if (!user) throw new Error('user with email ' + email + ' not found')
  
    var foundSticky = stickies.find(sticky => sticky.id === stickyId)
      
    if (!foundSticky) throw new Error('sticky with id ' + stickyId + ' not found')
    
    if (foundSticky.user !== email) throw new Error('sticky with id ' + stickyId + ' does not belong to user with email ' + email)

    foundSticky.text = text
}
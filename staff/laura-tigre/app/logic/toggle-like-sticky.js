function toggleLikeSticky(email, stickyId){
    var user= users.find(user => user.email === email)

    var sticky = stickies.find(sticky => sticky.id === stickyId)
   
    if(!user) throw new Error ('user with email '+email+' not found')

    if(!sticky) throw new Error ('sticky with id ' +stickyId +' not found')
  
    

    const index = sticky.likes.indexOf(email)

   index > -1 ? sticky.likes.splice(index,1): sticky.likes.push(email)
}
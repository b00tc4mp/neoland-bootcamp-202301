/**
 * toggles the likeability of specific sticky
 * @param {string } email the user email
 * @param {string} stickyId the sticky identifier
 */
function toggleLikeSticky(email, stickyId){


    const user= users.some(user => user.email === email)

    const sticky = stickies.find(sticky => sticky.id === stickyId)
   
    if(!user) throw new Error ('user with email '+email+' not found')

    if(!sticky) throw new Error ('sticky with id ' +stickyId +' not found')
  
    
    
    const index = sticky.likes.indexOf(email)

   index > -1 ? sticky.likes.splice(index,1): sticky.likes.push(email)
}
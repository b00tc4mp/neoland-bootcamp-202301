import stickies from "../data/stickies"
/**
 * toggles the likeability of specific sticky
 * @param {string } email the user email
 * @param {string} stickyId the sticky identifier
 */
function toggleLikeSticky(userId, stickyId){

    const sticky = stickies.find(sticky => sticky.id === stickyId)
   

    if(!sticky) throw new Error ('sticky with id ' +stickyId +' not found')
  
    
    
    const index = sticky.likes.indexOf(userId)

   index > -1 ? sticky.likes.splice(index,1): sticky.likes.push(userId)
}
export default toggleLikeSticky
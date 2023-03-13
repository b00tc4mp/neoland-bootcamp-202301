import stickies from "../data/stickies"
function deleteSticky(userId, stickyId) {
   
  

   var foundStickyIndex = stickies.findIndex(sticky => sticky.id === stickyId)
   if (foundStickyIndex < 0) throw new Error("sticky with id '" +stickyId+ "' not found")

   var sticky = stickies[foundStickyIndex]
   if (sticky.user !== userId) throw new Error("sticky with id '" + stickyId +"' does not belong to user with email '"+ userId +"'")

   stickies.splice(foundStickyIndex, 1)
}
export default deleteSticky

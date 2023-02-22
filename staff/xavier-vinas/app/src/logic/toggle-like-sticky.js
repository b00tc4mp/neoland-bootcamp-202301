import stickies from "../data/stickies"

function toggleLikeSticky(userId, stickyId) {

    var sticky = stickies.find(sticky => sticky.id === stickyId)

    if (!userId) throw new Error('user with email ' + userId + ' not found')
    
    if (!sticky) throw new Error("sticky with id " + stickyId + " not found")

    const index = sticky.likes.indexOf(userId)
    
    index > -1 ? sticky.likes.splice(index, 1) : sticky.likes.push(userId)

    // if (index > -1) {
    //     sticky.likes.splice(index, 1)
    // } else {
    //     sticky.likes.push(email)
    // }
}
export default toggleLikeSticky
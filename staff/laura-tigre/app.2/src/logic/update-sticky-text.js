import stickies from "../data/stickies"

function updateStickyText(userId, stickyId, text) {
   
    
    var foundSticky

    for (var i = 0; i < stickies.length && !foundSticky; i++) {
        var sticky = stickies[i]

        if (sticky.id === stickyId) foundSticky = sticky

    }

    if (!foundSticky) throw new Error('sticky with id ' + stickyId + ' not found')

    if (foundSticky.user !== userId) throw new Error('sticky with id ' + stickyId + ' does not belong to user with id ' + userId)

    foundSticky.text = text
    


}
export default updateStickyText
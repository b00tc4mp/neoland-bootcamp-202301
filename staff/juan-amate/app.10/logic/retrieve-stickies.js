/**
 * Retrieves the public stickies form all users and private stickies form user.
 * 
 * @return {array} The public stickies
 */
function retrieveStickies() {
    var selectStickies = []

    for (var i = 0; i < stickies.length; i++) {
        var sticky = stickies[i]

        if (window.email === sticky.user || sticky.visibility === 'public')
            selectStickies.push(sticky)

    }
    return selectStickies.reverse()
}
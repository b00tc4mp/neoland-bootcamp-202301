import stickies from '../data/stickies'

function retrieveMyStickies(userId) {
    var myStickies = []
    for (var i = 0; i < stickies.length; i++) {
        var sticky = stickies[i]
        if (sticky.user === userId)
            myStickies.push(sticky)
    }
    
    return myStickies.reverse()
}

export default retrieveMyStickies
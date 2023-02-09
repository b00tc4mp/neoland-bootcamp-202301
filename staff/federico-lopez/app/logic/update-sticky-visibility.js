function updateStickyVisibility(email, stickyId, visibility) {
    var userFound = false

    for (var i = 0; i < users.length && !userFound; i++) {
        var user = users[i]

        if (user.email === email) userFound = true
    }

    if (!userFound) throw new Error('user with email '  + email + ' not found')

    var foundSticky

    for (var i = 0; i < stickies.length && !foundSticky; i++) {
        var sticky = stickies[i]

        if (sticky.id === stickyId) foundSticky = sticky
    }

    if (!foundSticky) throw new Error('sticky with id ' + stickyId + ' not found')

    if (foundSticky.user !== email) throw new Error('sticky with id ' + stickyId + ' does not belong to user with email ' + email)

    foundSticky.visibility = visibility
}


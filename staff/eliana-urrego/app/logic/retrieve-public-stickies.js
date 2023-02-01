  /**
     * Retrieve the public stickies from users
     * 
     * @return {array} the public stickies 
     */
  function retrievePublicStickies() {
    var publicStickies = []

    for (var i = 0; i < stickies.length; i++) {
        var sticky = stickies[i]

        if (sticky.visibility === "public")
            publicStickies.push(sticky)
    }
    return publicStickies.reverse()
}

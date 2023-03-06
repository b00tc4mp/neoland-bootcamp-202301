const { validateUserId, validateStickyId } = require('com')
const { User, Sticky } = require('../data/models')

/**
 * Toggles favorite of a specific sticky
 * 
 * @param {string} userId The userId
 * @param {string} stickyId The sticky identifier
 */

function toggleFavsSticky(userId, stickyId) {
    validateUserId(userId)
    validateStickyId(stickyId)

    return Promise.all([User.findById(userId), Sticky.findById(stickyId)])
        .then(([user, sticky]) => {
            if(!user) throw new Error(`user with id ${userId} not found`)

            if(!sticky) throw new Error(`sticky with id '${stickyId}' not found`)




            const favs = user.favs
    
            const index = favs.indexOf(stickyId)
            if(index < 0)
                favs.push(stickyId)
            else
                favs.splice(index, 1)
    
    
            return user.save()


        })


}





module.exports = toggleFavsSticky
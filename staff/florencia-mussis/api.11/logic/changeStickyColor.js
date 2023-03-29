const { User, Sticky } = require('../data/models')
const { validateUserId, validateStickyId, validateColor } = require('com')

function changeStickyColor(userId, stickyId, color) {
    validateUserId(userId)
    validateStickyId(stickyId)
    validateColor(color)

    return User.findById(userId)
        .then(user =>{
            if (!user) throw new Error(`user with id ${userId} not found`)
        
            return Sticky.findById(stickyId)
        })
        .then(sticky => {
            if (!sticky) throw new Error(`sticky with id ${stickyId} not found`)
            
            if (sticky.user.toString() !== userId) throw new Error(`sticky with id ${stickyId} does not belong to user  with id ${userId}`)
            
            sticky.color = color

            return sticky.save()
        })

}

module.exports = changeStickyColor
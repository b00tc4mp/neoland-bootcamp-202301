const { User, Sticky } = require('../data/models')
const { validateUserId, validateStickyId, validateColor, ExistenceError, CoherenceError  } = require('com')

function changeStickyColor(userId, stickyId, color) {
    validateUserId(userId)
    validateStickyId(stickyId)
    validateColor(color)

    return User.findById(userId)
        .then(user =>{
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
        
            return Sticky.findById(stickyId)
        })
        .then(sticky => {
            if (!sticky) throw new ExistenceError(`sticky with id ${stickyId} not found`)
            
            if (sticky.user.toString() !== userId) throw new CoherenceError(`sticky with id ${stickyId} does not belong to user  with id ${userId}`)
            
            sticky.color = color

            return sticky.save()
        })

}

module.exports = changeStickyColor
const {User, Parent} = require('../data/models')

const { validateUserId,validateUserParentId, validateNewDescription ,ExistenceError,} = require('com')

function updateDescriptionParent(userId,parentId, newDescription) {
    validateUserId(userId)
    validateUserParentId(parentId)
    validateNewDescription(newDescription)


    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            
            return Parent.findById(parentId)
            
            .then(parent => {
                if (!parent) throw new ExistenceError(`parent with id ${parentId} not found`)
                parent.description = newDescription
                
                
                return parent.save()
            
              
            
            })
            
        })
       
}
module.exports = updateDescriptionParent
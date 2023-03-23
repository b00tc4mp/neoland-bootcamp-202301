const {User, Parent} = require('../data/models')

const { validateUserId, validateNewExtras ,ExistenceError,} = require('com')

function updateExtrasParent(userId, newExtras) {
    validateUserId(userId)
    validateNewExtras(newExtras)


    return Promise.all([User.findById(userId).lean(), Parent.findOne({user: userId}) ])
        .then(([user, parent]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            
            
                if (!parent) throw new ExistenceError(`parent with id ${userId} not found`)
                parent.extras = newExtras
                return parent.save()
        })
       
}
module.exports = updateExtrasParent
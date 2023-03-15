const { validateUserId, ExistenceError } = require('com')
const { User,Parent, Nanny } = require('../data/models')
/**
 * 
 * @param {string} userId 
 * @param {*}  
 * @returns 
 */

function retrieveParents(userId) {
    validateUserId(userId)
   
    return User.findById(userId).lean()
    .then(user => {
        if (!user) throw new ExistenceError(`user with id ${userId} not found`)

        if (user.role === 'parent')
            
            return Parent.findOne({ user: userId }).lean()
                .then(parent => {
                    user.city = parent.city

                    // sanitize
                    delete user._id
                    delete user.password
                    delete user.__v

                    return user
                })
    
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            return Nanny.find({city: user.city}).populate('user', '-password -__v').select('-__v').lean()
        })

    })
}

module.exports = retrieveParents


const { validateUserId, validateUserParentId, ExistenceError, CoherenceError } = require('com')
const { User, Parent } = require('../data/models')
/**
 *retrieve parent user if the user is the parent or the user is a parent
 * 
 * @param {string} userId The user
 * @param {string} userNannyId The parent user id
 */
function retrieveParent(userId, parentId) {
    validateUserId(userId)
   if(typeof parentId !== 'undefined') validateUserParentId(parentId)

   return User.findById(userId).lean()
   .then(user=>{
    if(!user) throw new ExistenceError(`user with id ${userId} not found`)

    let promise
    if(parentId)
    promise= Parent.findById(parentId).populate('user', 'name').select('-__v').lean()
    else
    promise = Parent.findOne({user: userId}).populate('user', 'name').select('-__v').lean()

    return promise
    .then(parent=> {
        if(!parent) throw new ExistenceError(`parent with id ${parentId} not found`)
        if(userId.role === 'parent' && parent.user._id.toString() !== userId)throw new CoherenceError(`user id ${userId} with role parent is not related to parent with id ${parentId}`)

         // sanitize
         parent.id = parent._id.toString()
         parent.user.id = parent.user._id.toString()
         parent.availabilities.forEach(availability => {
             availability.id = availability._id.toString()
             delete availability._id
         })
         parent.kids.forEach(kid => {
            kid.id = kid._id.toString()
            delete kid._id
         })
         
         delete parent._id
         delete parent.user._id

         return parent
    })
   })
    
}
module.exports = retrieveParent
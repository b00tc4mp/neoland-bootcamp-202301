const { validateUserId, validateUserNannyId, ExistenceError } = require('com')
const { User, Nanny } = require('../data/models')

function retrieveNanny(userId, nannyId) {

    validateUserId(userId)
    validateUserNannyId(nannyId)

    return User.findById(userId).lean()
    .then(user => {
        if (!user)throw new ExistenceError(`user with id ${userId} not found`)

        return Nanny.findById(nannyId).populate('user', 'name').select('-__v').lean()
       
        .then(nanny =>{
            if(!nanny)throw new ExistenceError(`nanny with id ${nannyId} not found`)
             // sanitize
             nanny.id= nanny._id.toString()
             nanny.user.id= nanny.user._id.toString()
             nanny.availabilities.forEach(availability => {
                availability.id= availability._id.toString()
                delete availability._id
             })
             delete nanny._id
             delete nanny.user._id
             

             return nanny

        })
    })
}
module.exports = retrieveNanny
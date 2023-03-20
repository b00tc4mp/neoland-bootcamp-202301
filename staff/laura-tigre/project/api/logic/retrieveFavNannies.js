const { User, Nanny } = require('../data/models')
const { validateUserId, ExistenceError } = require('com')

function retrieveFavNannies(userId) {
    validateUserId(userId)

    return User.findById(userId).populate({
        path: 'favs',
        select: '-__v',
        populate: {
            path: 'user',
            select: 'name'
        }
    }).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (user.role !== 'parent') throw new Error('invalid user role')

           const nannies = user.favs

           nannies.forEach( nanny=> {
            nanny.id= nanny._id.toString()
            nanny.user.id= nanny.user._id.toString()
            nanny.availabilities.forEach(availability => {
               availability.id= availability._id.toString()
               delete availability._id
            })
            delete nanny._id
            delete nanny.user._id
            
            
        })
        
        return nannies



        })



}
module.exports = retrieveFavNannies
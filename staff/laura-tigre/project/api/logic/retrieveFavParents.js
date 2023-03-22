const { User} = require('../data/models')
const { validateUserId, ExistenceError } = require('com')

function retrieveFavParents(userId) {
    validateUserId(userId)

    return User.findById(userId).populate({
        path:'favs',
        select:'-__v',
        populate:{
            path:'user',
            select:'name'
        }
    }).lean()
    .then(user => {
        if(!user) throw new ExistenceError(`User ${user} not found`)

        const parents = user.favs
        parents.forEach(parent =>{
            parent.fav= true

            if(parent._id){
                parent.id= parent._id.toString()
                delete parent._id
                delete parent.__v
            }
            if(parent.user._id){
                parent.user.id= parent.user._id.toString()
                delete parent.user._id

            }
            parent.availabilities.forEach(availability=>{
                availability.id= availability.id.toString()
                delete availability._id
            })
            parents.kids.forEach(kid=>{
                kid.id= kid._id.toString()
                delete kid._id
            })

        })

        return parents
    })


}
module.exports = retrieveFavParents
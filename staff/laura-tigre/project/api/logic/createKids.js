const {User, Parent,Kid} = require('../data/models')

const { validateUserId,validateNewName,validateNewDateOfBirth ,ExistenceError,} = require('com')

function createKids(userId,newName, newDateOfBirth) {
    validateUserId(userId)
    validateNewName(newName)
    validateNewDateOfBirth(newDateOfBirth)


    return Promise.all([User.findById(userId).lean(), Parent.findOne({user:userId})]) 
        .then(([user,parent]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            
                if (!parent) throw new ExistenceError(`parent with id ${userId} not found`)
                const addKid= new Kid({
                    name : newName,
                    dateOfBirth :new Date(newDateOfBirth)
                })

                    
                parent.kids.push(addKid)
            
                return parent.save()
              
        })      
}
module.exports = createKids
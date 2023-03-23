const { validateUserId, validateUserParentId, ExistenceError, CoherenceError } = require('com')
const { User, Parent } = require('../data/models')

function retrieveParent(userId, parentId) {

    validateUserId(userId)
    if (parentId) validateUserParentId(parentId)

    if (!parentId) return Parent.findOne({ user: userId })
        .then(parent => {
            parentId = parent.id
            return Promise.all([User.findById(userId).lean(), Parent.findById(parentId).populate('user', 'name').select('-__v').lean()])

        })
        .then(([user, parent]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!parent) throw new ExistenceError(`parent with id ${parentId} not found`)
            if (user.role === 'parent' && parent.user._id.toString() !== userId) throw new CoherenceError(`parent with id ${parentId} is not related to the user with id ${userId} and role parent`)
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

    else {
        return Promise.all([User.findById(userId).lean(), Parent.findById(parentId).populate('user', 'name').select('-__v').lean()])

            .then(([user, parent]) => {
                if (!user) throw new ExistenceError(`user with id ${userId} not found`)
                if (!parent) throw new ExistenceError(`parent with id ${parentId} not found`)
                if (user.role === 'parent' && parent.user._id.toString() !== userId) throw new CoherenceError(`parent with id ${parentId} is not related to the user with id ${userId} and role parent`)
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
    }
}
module.exports = retrieveParent
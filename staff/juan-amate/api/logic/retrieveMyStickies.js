const { Types: { ObjectId } } = require('mongoose')
const { validateUserId } = require('com')
const { User, Sticky } = require('../data/models')

function retrieveMyStickies(userId) {
    validateUserId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Sticky.find({ user: new ObjectId(userId) })
        })
}

module.exports = retrieveMyStickies
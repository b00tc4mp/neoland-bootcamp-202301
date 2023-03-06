const { Types: { ObjectId } } = require('mongoose')
const { validateUserId } = require('com')
const { User, Sticky } = require('../data/models')

function retrieveFavsStickies(userId) {
    validateUserId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Sticky.find({ favs: new ObjectId(userId) })
        })
}

module.exports = retrieveFavsStickies
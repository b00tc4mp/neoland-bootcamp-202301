const { User, Auction } = require('../data/models')
const { validateUserId, ExistenceError } = require('../../com')

function createAuction(userId, title, description, price, photo, bidRate, startDate, endDate) {
    validateUserId(userId)
    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (typeof description !== 'string') throw new TypeError('description is not a string')
    if (typeof price !== 'number') throw new TypeError('price is not a number')
    if (typeof photo !== 'string') throw new TypeError('photo is not a string')
    if (typeof bidRate !== 'number') throw new TypeError('bidRate is not a number')
    if (!(startDate instanceof Date)) throw new TypeError('startDate is not a date')
    if (!(endDate instanceof Date)) throw new TypeError('endDate is not a date')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (user.role !== 'admin') throw new TypeError(`user with id ${userId} is not admin`)

            const auction = new Auction({
                user: userId,
                title,
                description,
                price,
                photo,
                bidRate,
                startDate,
                endDate
            })
            return auction.save()
        })
}


module.exports = createAuction
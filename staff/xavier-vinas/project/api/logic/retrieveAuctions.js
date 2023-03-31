const { ExistenceError, validateUserId } = require('com')
const { Auction, User } = require("../data/models")
const aggregateUserStatusInAuctions = require("./helpers/aggregateUserStatusInAuctions")
/**
 * 
 * @param {string} userId The userId the user belongs
 * @returns 
 */

function retrieveAuctions(userId) {
    validateUserId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Auction.updateMany({ endDate: { $lt: new Date() }, status: 'open' }, { status: 'closed' })
    ])
        .then(([user]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            return Auction.find().lean()
        })
        .then(auctions => {
            return aggregateUserStatusInAuctions(userId, auctions)
        })




}

module.exports = retrieveAuctions
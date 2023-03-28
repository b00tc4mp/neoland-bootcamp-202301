const { ExistenceError, validateUserId , validateAuctionId } = require('com')
const { Auction, User } = require("../data/models")
const aggregateUserStatusInAuctions = require('./helpers/aggregateUserStatusInAuctions')
/**
 * 
 * @param {string} userId The userId the user belongs
 * @param {string} auctionId the auctionId the user belongs
 * @returns 
 */

function retrieveAuction(userId, auctionId) {
    validateUserId(userId)
    validateAuctionId(auctionId)

    return Promise.all([
        User.findById(userId).lean(),
        Auction.findById(auctionId)
    ])
        .then(([user, auction]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!auction) throw new ExistenceError('auction not found')

            if (auction.endDate < new Date()) {
                auction.status = 'closed'

                return auction.save()
            }

            return auction
        })
        .then(auction => {
            return aggregateUserStatusInAuctions(userId, [auction._doc])
        })
        .then(auctions => {
            return auctions[0]
        })

}

module.exports = retrieveAuction
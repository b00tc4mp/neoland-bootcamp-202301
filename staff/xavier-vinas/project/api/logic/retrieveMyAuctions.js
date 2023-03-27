const { ExistenceError, validateUserId } = require('../../com')
const { User, Bid, Auction } = require("../data/models")
const aggregateUserStatusInAuctions = require('./helpers/aggregateUserStatusInAuctions')
/**
 * 
 * @param {string} userId The userId the user belongs
 * @returns 
 */

function retrieveMyAuctions(userId) {
    validateUserId(userId)

    const now = new Date()

    return Promise.all([
        User.findById(userId).lean(),
        Auction.updateMany({ startDate: { $lt: now }, endDate: { $gt: now }, status: 'created' }, { status: 'open' }),
        Auction.updateMany({ endDate: { $lt: now }, status: 'open' }, { status: 'closed' })
    ])
        .then(([user]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            return Bid.find({ user: userId }).lean()
        })
        .then(bids => {
            if (!bids) throw new ExistenceError(`bid with id ${userId} not found`)

            const auctionIds = []

            bids.forEach(bid => {
                const auctionId = bid.auction

                if (!auctionIds.some(_auctionId => _auctionId.toString() === auctionId.toString()))
                    auctionIds.push(auctionId)
            })

            return Auction.find({ _id: { $in: auctionIds } }).lean()
        })
        .then(auctions => {
            return aggregateUserStatusInAuctions(userId, auctions)
        })

}

module.exports = retrieveMyAuctions


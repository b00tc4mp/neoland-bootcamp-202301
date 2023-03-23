const { User, Auction, Bid } = require('../data/models')
const { validateUserId, ExistenceError, ValueError, CoherenceError } = require('../../../com')

function bidAuction(userId, auctionId, amount) {
    validateUserId(userId)
    if (typeof auctionId !== 'string') throw new TypeError('auctionId is not a string')
    if (typeof amount !== 'number') throw new TypeError('amount is not a number')

    return Promise.all([
        User.findById(userId),
        Auction.findById(auctionId),
        Bid.find({ auction: auctionId })
    ])
        .then(([user, auction, bids]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!auction) throw new ExistenceError(`auction with id ${auctionId} not found`)

            return Auction.updateMany({ endDate: { $lt: new Date() }, status: 'open' }, { status: 'closed' })
                .then(() => {
                    if (auction.status === 'closed') throw new CoherenceError('auction is closed')

                    const maxBidAmount = bids.reduce((max, bid) => {
                        return bid.amount > max ? bid.amount : max
                    }, auction.price)

                    if (amount < maxBidAmount + auction.bidRate) throw new ValueError('bid amount is lower than current max bidded amount')

                    const bid = new Bid({
                        auction: auctionId,
                        user: userId,
                        amount,
                        date: new Date()
                    })

                    return bid.save()
                })
        });
}

module.exports = bidAuction


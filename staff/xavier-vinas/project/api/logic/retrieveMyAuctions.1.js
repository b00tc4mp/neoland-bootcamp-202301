const { ExistenceError, validateUserId } = require('../../com')
const { User, Bid, Auction } = require("../data/models")

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
                .then(auctions => {
                    return Bid.find({ auction: { $in: auctionIds } })
                        .then(bids => {
                            const auctionsBids = bids.reduce((acc, bid) => {
                                const auctionId = bid.auction.toString()

                                if (!acc[auctionId]) acc[auctionId] = []

                                acc[auctionId].push(bid)

                                return acc
                            }, {})

                            for (const auctionId in auctionsBids) {
                                const auctionBids = auctionsBids[auctionId]

                                const lastBid = auctionBids.reduce((prevBid, nextBid) => {
                                    return prevBid.date < nextBid.date ? nextBid : prevBid
                                })

                                if (lastBid.user.toString() === userId) {
                                    const auction = auctions.find(auction => auction._id.toString() === auctionId)

                                    auction.userStatus = auction.status === 'closed' ? 'won' : 'winning'
                                }
                            }

                            auctions.forEach(auction => {
                                auction.id = auction._id.toString()

                                delete auction._id

                                delete auction.__v
                            })

                            return auctions
                        })
                })
        })

}

module.exports = retrieveMyAuctions
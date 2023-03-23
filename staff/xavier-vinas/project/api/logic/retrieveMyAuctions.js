const { ExistenceError, validateUserId } = require('../../com')
const { User, Bid, Auction } = require("../data/models")

function retrieveMyAuctions(userId) {
    validateUserId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Auction.updateMany({ endDate: { $gt: new Date() }, status: 'open' }, { status: 'closed' }),
        Auction.updateMany({ endDate: { $lt: new Date() }, status: 'open' }, { status: 'closed' })
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
            auctions.forEach(auction => {
                auction.id = auction._id.toString()

                delete auction._id
  
                delete auction.__v
            })

            return auctions
        })

}

module.exports = retrieveMyAuctions
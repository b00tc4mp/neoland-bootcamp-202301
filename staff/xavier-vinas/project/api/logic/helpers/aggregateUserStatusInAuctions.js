const { Bid } = require('../../data/models')

function aggregateUserStatusInAuctions(userId, auctions) {
    const auctionIds = auctions.map(auction => auction._id)

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
}

module.exports = aggregateUserStatusInAuctions
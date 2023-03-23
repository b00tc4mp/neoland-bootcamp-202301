const { ExistenceError, validateUserId } = require('../../com')
const { Auction, User } = require("../data/models")

function retrieveAuction(userId, auctionId) {
    validateUserId(userId)

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
            auction = auction._doc

            auction.id = auction._id.toString()
            delete auction._id

            delete auction.__v

            return auction
        })

}

module.exports = retrieveAuction
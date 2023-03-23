const { ExistenceError, validateUserId } = require('../../com')
const { Auction, User } = require("../data/models")

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
            auctions.forEach(auction => {
                auction.id = auction._id.toString()
                delete auction._id

                delete auction.__v
            })

            return auctions
        })
   



}

module.exports = retrieveAuctions
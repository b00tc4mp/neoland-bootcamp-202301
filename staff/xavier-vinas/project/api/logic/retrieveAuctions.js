const { ExistenceError, validateUserId } = require('../../com')
const { Auction, User } = require("../data/models")

function retrieveAuctions(userId) {
    validateUserId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Auction.find().lean()
    ])
        .then(([user, auctions]) => {
            if (!auctions) throw new ExistenceError('auction not found')
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            auctions.forEach(auction => {

                if (auction._id) {
                    auction.id = auction._id.toString()
                    delete auction._id

                    delete auction.__v
                }


            })

            return auctions
        })

}

module.exports = retrieveAuctions
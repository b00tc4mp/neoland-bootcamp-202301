const { ExistenceError, validateUserId, validateAuctionId } = require('com')
const { Auction, User, Bid } = require("../data/models")
/** 
* @param {string} auctionId The userId the user belongs
* @param {string}  userId the auctionId the user belongs
* @returns 
*/

function retrieveAuctionBid(auctionId, userId) {
    validateAuctionId(auctionId)
    validateUserId(userId)

    return Promise.all([
        Auction.findById(auctionId),
        User.findById(userId),
        Bid.find({ auction: auctionId }).populate('user', 'name').lean()
    ])
        .then(([user, auction, bids]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!auction) throw new ExistenceError('auction not found')
            if (!bids) throw new ExistenceError(`bid with id ${userId} not found`)


            bids.forEach(bid => {

                bid.id = bid._id.toString()

                delete bid._id

                delete bid.__v

                if (bid.user._id) {
                    bid.user.id = bid.user._id.toString()

                    delete bid.user._id
                }

            })

            return bids
        })

}

module.exports = retrieveAuctionBid
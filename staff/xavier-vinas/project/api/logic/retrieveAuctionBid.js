const { ExistenceError, validateUserId } = require('../../com')
const { Auction, User , Bid } = require("../data/models")

function retrieveAuctionBid(auctionId, userId) {
    if (typeof auctionId !== 'string') throw new TypeError('auctionId is not a string')
    validateUserId(userId)
   
    return Promise.all([
        
        Auction.findById(auctionId),
        User.findById(userId),
        Bid.find({auction:auctionId}).lean() 
    ])
        .then(([user, auction , bids]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!auction) throw new ExistenceError('auction not found')
            if (!bids) throw new ExistenceError(`bid with id ${userId} not found`)


            bids.forEach(bid => {
                
            bid.id = bid._id.toString()
            
            delete bid._id

            delete bid.__v
            })

            return bids
        })

}

module.exports = retrieveAuctionBid
const { Types: { ObjectId } } = require('mongoose')
const { validateUserId, ExistenceError, CoherenceError } = require('../../com')
const { User, Auction } = require('../data/models')

/**
 * Deletes the specified sticky by id that belongs to the specified user (by userId)
 * 
 * @param {string} userId The userId address of the user
 * @param {string} auctionId The auction id of the auction
 */
function deleteAuction(userId, auctionId) {
    validateUserId(userId)


    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            return Auction.findById(auctionId)
        })
        .then(auction => {
            if (!auction) throw new ExistenceError(`auction with id ${auctionId} not found`)

            if (auction.user.toString() !== userId) throw new CoherenceError(`auction with id ${auctionId} does not belong to user with id ${userId}`)

            return Auction.deleteOne({ _id: new ObjectId(stickyId) })
        })


}

module.exports = deleteAuction
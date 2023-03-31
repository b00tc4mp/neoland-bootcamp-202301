function validateAuctionId(auctionId) {
    if (typeof auctionId !== 'string') throw new TypeError('auctionId is not a string')
}

module.exports = validateAuctionId
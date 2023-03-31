

function validateBidRate(bidRate) {
    if (typeof bidRate !== 'number') throw new TypeError('bidRate is not a number')
}

module.exports = validateBidRate
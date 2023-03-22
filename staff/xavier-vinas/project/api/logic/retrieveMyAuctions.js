const { ExistenceError, validateUserId } = require('../../com')
const { User , Bid } = require("../data/models")

function retrieveMyAuctions(userId) {
    validateUserId(userId)
  
    return Promise.all([
        User.findById(userId),
        Bid.find({user: userId}).populate('auction').lean() 
    ])
        .then(([user , bids]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!bids) throw new ExistenceError(`bid with id ${userId} not found`)
            //sanitize

            bids.forEach(bid => {
                bid.id = bid._id.toString()

                delete bid._id

                delete bid.__v
            })
          
          return bids
        })

}

module.exports = retrieveMyAuctions
const { connect, disconnect } = require('mongoose')
const retrieveAuctionBid = require('./retrieveAuctionBid')

connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {
        const date = new Date()
      
        return retrieveAuctionBid("6412dd0f266b2f321035f49a", "6412dd0f266b2f321035f498  " ,5  , date )
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
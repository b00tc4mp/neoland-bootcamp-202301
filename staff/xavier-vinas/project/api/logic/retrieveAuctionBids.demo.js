const { connect, disconnect } = require('mongoose')
const retrieveAuctionBids = require('./retrieveAuctionBids')

connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {     
        return retrieveAuctionBids("6412dd0f266b2f321035f498", "6421732ce508a95d001ded86" )
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
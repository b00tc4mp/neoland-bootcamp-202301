const { connect, disconnect } = require('mongoose')
const retrieveAuction = require('./retrieveAuction')

connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {
        return retrieveAuction("6412dd0f266b2f321035f498", "64182d23232cb3d4af0f721a")
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
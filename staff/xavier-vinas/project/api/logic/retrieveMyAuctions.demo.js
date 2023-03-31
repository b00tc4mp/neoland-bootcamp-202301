const { connect, disconnect } = require('mongoose')
const retrieveMyAuctions = require('./retrieveMyAuctions')

connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {
        return retrieveMyAuctions("6412dd0f266b2f321035f498")
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
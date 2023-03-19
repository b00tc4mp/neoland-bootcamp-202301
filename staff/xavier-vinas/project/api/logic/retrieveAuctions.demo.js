const { connect, disconnect } = require('mongoose')
const retrieveAuctions = require('./retrieveAuctions')

connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {
        return retrieveAuctions("640f5021248f56ae9d5f793e")
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
const { connect, disconnect } = require('mongoose')
const retrieveUser = require('./retrieveUser')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {

        return retrieveUser('640c7d10c638b6018f1f2e41')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
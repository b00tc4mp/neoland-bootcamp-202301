const { connect, disconnect } = require('mongoose')
const retrieveList = require('./retrieveList')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return retrieveList('6413309401d0709e95c0e0d5', '6413309401d0709e95c0e0df')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
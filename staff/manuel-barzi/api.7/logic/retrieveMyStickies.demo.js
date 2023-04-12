const { connect, disconnect } = require('mongoose')
const retrieveMyStickies = require('./retrieveMyStickies')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return retrieveMyStickies('6400980ae2d80a6392129d69')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
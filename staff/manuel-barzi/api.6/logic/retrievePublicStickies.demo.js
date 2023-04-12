const { connect, disconnect } = require('mongoose')
const retrievePublicStickies = require('./retrievePublicStickies')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return retrievePublicStickies('6400980ae2d80a6392129d69')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
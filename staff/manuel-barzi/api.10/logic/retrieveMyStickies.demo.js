const { connect, disconnect } = require('mongoose')
const retrieveMyStickies = require('./retrieveMyStickies')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return retrieveMyStickies('6400b46a537e25951ae65548')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
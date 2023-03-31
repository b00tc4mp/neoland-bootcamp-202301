const { connect, disconnect } = require('mongoose')
const retrieveMyStickies = require('./retrieveMyStickies')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return retrieveMyStickies('6400898a733d9845dcfdd8de')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
const { connect, disconnect } = require('mongoose')
const retrieveFavStickies = require('./retrieveFavStickies')


connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {

        return retrieveFavStickies ('640086c888044024d15d2cdf')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
const { connect, disconnect } = require('mongoose')
const toggleFavSticky = require('./toggleFavSticky')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return toggleFavSticky('6400bf9f09116c5d4d80013c', '64026e442771de8546ac351f')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
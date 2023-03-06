const { connect, disconnect } = require('mongoose')
const retrieveMyFavs = require('./retrieveMyFavs')


connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {

        return retrieveMyFavs('6400c7509b51c43bdd462fa8')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

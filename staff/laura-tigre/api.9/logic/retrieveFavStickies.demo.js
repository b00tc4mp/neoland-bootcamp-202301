const { connect, disconnect } = require('mongoose')
const retrieveFavStickies = require('./retrieveMyFavs')


connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {

        return retrieveFavStickies('6400c7509b51c43bdd462fa8')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

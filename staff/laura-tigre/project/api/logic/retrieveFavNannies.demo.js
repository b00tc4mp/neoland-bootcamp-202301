const { connect, disconnect } = require('mongoose')
const retrieveFavNannies = require('./retrieveFavNannies')


connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {

        return retrieveFavNannies('64133923d48117c6127ff986')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())


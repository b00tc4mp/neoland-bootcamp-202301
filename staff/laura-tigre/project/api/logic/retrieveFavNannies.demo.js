const { connect, disconnect } = require('mongoose')
const retrieveFavNannies = require('./retrieveFavNannies')


connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {

        return retrieveFavNannies('6415f5e39e3d8c682f1fbee6')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())


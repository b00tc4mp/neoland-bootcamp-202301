const { connect, disconnect } = require('mongoose')
const retrieveMyContracts = require('./retrieveMyContracts')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        return retrieveMyContracts('641094692eaa779dcca0e35b')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
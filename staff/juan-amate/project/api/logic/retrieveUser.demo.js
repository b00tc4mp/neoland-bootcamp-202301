const { connect, disconnect } = require('mongoose')
const retrieveUser = require('./retrieveUser')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {

        return retrieveUser('641c85b8045fbee3bb4a6e39')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
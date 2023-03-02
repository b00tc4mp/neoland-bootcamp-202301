const { connect, disconnect } = require('mongoose')
const retrieveUser = require('./retrieveUser')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {   

        return retrieveUser('64009221331c8171b5806079')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
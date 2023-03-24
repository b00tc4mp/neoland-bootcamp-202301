const { connect, disconnect } = require('mongoose')
const retrieveList = require('./retrieveList')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return retrieveList('641991db1cb80afb831faf03', '641b2b6f654b5913afb4e162')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
const { connect, disconnect } = require('mongoose')
const retrieveContract = require('./retrieveContract')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {

        return retrieveContract('641dbbc4f7889f829a83d146', '641dbc73f7889f829a83d165')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
const { connect, disconnect } = require('mongoose')
const retrievePublicStickies = require('./retrievePublicStickies')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {

        return retrievePublicStickies('64009221331c8171b5806079')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
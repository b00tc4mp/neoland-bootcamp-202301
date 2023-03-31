const { connect, disconnect } = require('mongoose')
const retrieveContract = require('./retrieveContract')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {

        return retrieveContract('641089dfdec56944ce04f875', '64149b3ff00d19f566a68b46')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
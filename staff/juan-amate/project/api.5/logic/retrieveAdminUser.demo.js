const { connect, disconnect } = require('mongoose')
const retrieveAdminUser = require('./retrieveAdminUser')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        return retrieveAdminUser('641089dfdec56944ce04f875')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
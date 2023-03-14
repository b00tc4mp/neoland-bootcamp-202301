const { connect, disconnect } = require('mongoose')
const authenticateUser = require('./authenticateUser')

connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {
        return authenticateUser('hello@world.com', '234234234')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
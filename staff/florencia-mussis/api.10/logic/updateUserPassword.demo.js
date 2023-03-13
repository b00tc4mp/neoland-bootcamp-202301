const { connect, disconnect } = require('mongoose')
const updateUserPassword = require('./updateUserPassword')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {   

        return updateUserPassword('64009221331c8171b5806079','123123123', '234234234', '234234234')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
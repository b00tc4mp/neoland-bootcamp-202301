const { connect, disconnect } = require('mongoose')
const updateUserPassword = require('./updateUserPassword')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        return updateUserPassword('640f2f95d40901fa2822a4d9', '123123123', '234234234', '234234234')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
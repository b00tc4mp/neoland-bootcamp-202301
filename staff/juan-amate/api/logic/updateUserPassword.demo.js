const { connect, disconnect } = require('mongoose')
const updateUserPassword = require('./updateUserPassword')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return updateUserPassword('63fe30e9f98697157b129232', '123123123', '234234234', '234234234')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
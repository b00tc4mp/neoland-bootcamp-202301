const { connect, disconnect } = require('mongoose')
const updateUserPassword = require('./updateUserPassword')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return updateUserPassword('640094a6cc56c59e3b2d847a', '123123123', '234234234', '234234234')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
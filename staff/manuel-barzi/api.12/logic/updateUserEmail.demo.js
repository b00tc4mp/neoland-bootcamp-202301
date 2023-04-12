const { connect, disconnect } = require('mongoose')
const updateUserEmail = require('./updateUserEmail')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return updateUserEmail('640094a6cc56c59e3b2d847a', 'hello@world.com', '234234234')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
const { connect, disconnect } = require('mongoose')
const unregisterUser = require('./unregisterUser')


connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {   
        return unregisterUser('640090f40879e90fc7028c88', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
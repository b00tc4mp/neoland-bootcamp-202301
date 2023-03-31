const { connect, disconnect } = require('mongoose')
const unregisterUser = require('./unregisterUser')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        return unregisterUser('640f2f95d40901fa2822a4da', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
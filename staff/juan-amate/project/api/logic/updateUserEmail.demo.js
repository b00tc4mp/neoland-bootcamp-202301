const { connect, disconnect } = require('mongoose')
const updateUserEmail = require('./updateUserEmail')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        return updateUserEmail('640f2f95d40901fa2822a4d9', 'maria@jimenez.com', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
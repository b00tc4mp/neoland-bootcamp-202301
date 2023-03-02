const { connect, disconnect } = require('mongoose')
const updateUserEmail = require('./updateUserEmail')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {     
        return updateUserEmail('64009221331c8171b5806079','pepe@grillo.com', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
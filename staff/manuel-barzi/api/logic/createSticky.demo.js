const { connect, disconnect } = require('mongoose')
const createSticky = require('./createSticky')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return createSticky('6400980ae2d80a6392129d69', 'hola mon', 'public')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
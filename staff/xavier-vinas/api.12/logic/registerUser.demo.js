const { connect, disconnect } = require('mongoose')
const registerUser = require('./registerUser')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return registerUser('Hola Mundo', 18, 'hola@mundo.com', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
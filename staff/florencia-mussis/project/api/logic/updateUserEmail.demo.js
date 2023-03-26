const { connect, disconnect } = require('mongoose')
const updateUserEmail = require('./updateUserEmail')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {
        return updateUserEmail('640ca23cba43626c02f95afc', 'flormussis@gmail.com', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
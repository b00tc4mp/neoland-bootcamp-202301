const { connect, disconnect } = require('mongoose')
const updateUserPassword = require('./updateUserPassword')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {
        return updateUserPassword('640ca23cba43626c02f95afc', '234234234', '123123123', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
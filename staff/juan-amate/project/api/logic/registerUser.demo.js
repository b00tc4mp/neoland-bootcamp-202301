const { connect, disconnect } = require('mongoose')
const registerUser = require('./registerUser')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        return registerUser('kepa@quete.com', '123123123', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
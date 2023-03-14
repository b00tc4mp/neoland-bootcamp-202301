const { connect, disconnect } = require('mongoose')
const registerUser = require("./registerUser")

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return registerUser('Pepito Grillo', 30, 'pepito@grillo.com', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

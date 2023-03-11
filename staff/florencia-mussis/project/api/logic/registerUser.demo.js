const { connect, disconnect } = require('mongoose')
const registerUser = require('./registerUser')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {   
        return registerUser('Florencia Mussis', 30, 'florenciamussis@gmail.com', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
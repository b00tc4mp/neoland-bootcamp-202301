const { connect, disconnect } = require('mongoose')
const retrieveUser = require('./retrieveUser')


connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
    

        return retrieveUser('6400a7f148c755b7f3af4076')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())


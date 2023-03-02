const { connect, disconnect } = require('mongoose')
const unregisterUser = require('./unregisterUser')

'mongodb://127.0.0.1:27017'

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
       
     return unregisterUser('6400a7f148c755b7f3af4076', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

module.exports = unregisterUser
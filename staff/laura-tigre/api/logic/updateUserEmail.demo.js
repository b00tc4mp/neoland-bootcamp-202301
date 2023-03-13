const { connect, disconnect } = require('mongoose')
const updateUserEmail = require('./updateUserEmail')



connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        

        return updateUserEmail('6400a7de48c755b7f3af4073','123123123','papa@noel.com')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

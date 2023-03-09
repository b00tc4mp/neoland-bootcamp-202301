
const { connect, disconnect } = require('mongoose')
const updateUserPassword = require('./updateUserPassword')



connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        

        return updateUserPassword('6400a7de48c755b7f3af4073','123123123','234234234','234234234')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

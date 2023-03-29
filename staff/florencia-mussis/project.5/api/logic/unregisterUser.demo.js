const { connect, disconnect } = require('mongoose')
const unregisterUser = require('./unregisterUser')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {
        return unregisterUser('640ca1bddc7700b6fe4fc5d8', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
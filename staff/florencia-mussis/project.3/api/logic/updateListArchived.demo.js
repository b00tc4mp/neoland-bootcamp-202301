const { connect, disconnect } = require('mongoose')
const updateListArchived = require('./updateListArchived')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return updateListArchived('6413309401d0709e95c0e0d5', '64147573678b0546384f5f36', true)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())        
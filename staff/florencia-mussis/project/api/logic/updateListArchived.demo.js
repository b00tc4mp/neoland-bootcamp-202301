const { connect, disconnect } = require('mongoose')
const updateListArchived = require('./updateListArchived')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return updateListArchived('640f075a659f1454f3310073', '6412f7f8e83693e977a48d9b', true)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())        
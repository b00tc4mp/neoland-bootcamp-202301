const { connect, disconnect } = require('mongoose')
const updateListArchived = require('./updateListArchived')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {
        return updateListArchived('641991db1cb80afb831faf03', '641b2b6f654b5913afb4e162', false)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())        
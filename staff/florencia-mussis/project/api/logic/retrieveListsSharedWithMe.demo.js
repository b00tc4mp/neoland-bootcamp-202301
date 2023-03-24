const { connect, disconnect } = require('mongoose')
const retrieveListsSharedWithMe = require('./retrieveListsSharedWithMe')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return retrieveListsSharedWithMe("64199e5e1cb80afb831fb179")
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
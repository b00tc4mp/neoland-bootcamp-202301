const { connect, disconnect } = require('mongoose')
const retrieveMyLists = require('./retrieveMyLists')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {
        return retrieveMyLists("641724317600898905e5cb9e")
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
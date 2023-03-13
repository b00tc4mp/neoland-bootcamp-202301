const { connect, disconnect } = require('mongoose')
const retrieveArchivedLists = require('./retrieveArchivedLists')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return retrieveArchivedLists('640f26c1badaf9f70cbe9d05')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
const { connect, disconnect } = require('mongoose')
const retrieveArchivedLists = require('./retrieveArchivedLists')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return retrieveArchivedLists('640f075a659f1454f3310073')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
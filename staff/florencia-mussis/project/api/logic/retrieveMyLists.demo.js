const { connect, disconnect } = require('mongoose')
const retrieveMyLists = require('./retrieveMyLists')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return retrieveMyLists("640f075a659f1454f3310073")
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
const { connect, disconnect } = require('mongoose')
const retrieveList = require('./retrieveList')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return retrieveList('640f075a659f1454f3310073', '640f075a659f1454f331007d')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
const { connect, disconnect } = require('mongoose')
const searchList = require('./searchList')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return searchList('640f075a659f1454f3310073', 'lista1')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
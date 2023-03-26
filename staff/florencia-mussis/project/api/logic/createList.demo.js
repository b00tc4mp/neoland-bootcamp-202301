const { connect, disconnect } = require('mongoose')
const createList = require('./createList')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {
        return createList('640f075a659f1454f3310073', 'Montserrat',)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
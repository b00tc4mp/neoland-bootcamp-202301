const { connect, disconnect } = require('mongoose')
const updateItemCheck = require('./updateItemCheck')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return updateItemCheck('640f075a659f1454f3310073', '640f075a659f1454f331007d', '640f075a659f1454f331007e', true )
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

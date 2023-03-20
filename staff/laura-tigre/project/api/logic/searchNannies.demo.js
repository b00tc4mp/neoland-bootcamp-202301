const { connect, disconnect } = require('mongoose')
const searchNannies = require('./searchNannies')


connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
    

        return searchNannies('641221e2e958dabcabc537fc',false,false,false, false,false,false, false,false,false, false,false,false, false,false,false, false,false,false, false,false,false,5,10,undefined,undefined)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())


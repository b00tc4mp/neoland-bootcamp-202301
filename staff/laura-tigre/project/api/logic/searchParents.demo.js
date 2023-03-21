const { connect, disconnect } = require('mongoose')
const searchParents = require('./searchParents')


connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
    

        return searchParents('6415f5e39e3d8c682f1fbee7',false,false,false, false,false,false, false,false,false, false,false,false, false,false,false, false,false,false, false,false,false,2,undefined)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())


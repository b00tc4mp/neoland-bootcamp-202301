const { connect, disconnect } = require('mongoose')
const createItem = require('./createItem')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {   
        return createItem("640f075a659f1454f3310076","cereal", false)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
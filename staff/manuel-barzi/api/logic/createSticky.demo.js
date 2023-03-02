const { connect, disconnect } = require('mongoose')
const createSticky = require('./createSticky')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return createSticky('6400918c0f32401c45dcc64c', 'privet mir', 'public')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
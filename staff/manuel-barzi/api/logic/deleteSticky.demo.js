const { connect, disconnect } = require('mongoose')
const deleteSticky = require('./deleteSticky')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return deleteSticky('6400b46a537e25951ae65548', '6400b4903b98a4fa1c960f73')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
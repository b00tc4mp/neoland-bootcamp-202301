const { connect, disconnect } = require('mongoose')
const updateStickyText = require('./updateStickyText')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return updateStickyText('6400980ae2d80a6392129d69', '640098abc874125698b7285e', 'hello world')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
const { connect, disconnect } = require('mongoose')
const updateStickyVisibility = require('./updateStickyVisibility')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return updateStickyVisibility('6400980ae2d80a6392129d69', '640098abc874125698b7285e', 'private')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
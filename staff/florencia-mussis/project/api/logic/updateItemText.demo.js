const { connect, disconnect } = require('mongoose')
const updateItemText = require('./updateItemText')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return updateItemText('640f075a659f1454f3310073', '640f108d22b63fb6080d27b0', '6411e12e9194441fb0c0cc94', "perro" )
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

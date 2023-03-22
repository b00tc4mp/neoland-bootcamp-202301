
const {connect, disconnect} = require('mongoose')
const toggleFavParent = require('./toggleFavParent')

connect('mongodb://127.0.0.1:27017/mydb')
.then(() => {

    return toggleFavParent('6415f5e39e3d8c682f1fbee7','6415f60fb2848a15a4bf6b44')
})
.then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
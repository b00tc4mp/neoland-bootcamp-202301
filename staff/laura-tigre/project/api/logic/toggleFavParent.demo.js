
const {connect, disconnect} = require('mongoose')
const toggleFavParent = require('./toggleFavParent')

connect('mongodb://127.0.0.1:27017/kangaroo')
.then(() => {

    return toggleFavParent('641ace52897f7580550bb03f','641acdefc381a9d99dab1e14')
})
.then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
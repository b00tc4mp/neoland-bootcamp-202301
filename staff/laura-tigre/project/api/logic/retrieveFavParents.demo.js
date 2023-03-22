const { connect, disconnect } = require('mongoose')
const retrieveFavParents = require('./retrieveFavParents')


connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {

        return retrieveFavParents('6415f60fb2848a15a4bf6b3f')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())


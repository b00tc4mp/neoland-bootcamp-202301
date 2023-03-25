const { connect, disconnect } = require('mongoose')
const retrieveNanny = require('./retrieveNanny')


connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        return retrieveNanny('641adfcbd2e17978d7935e92', '641adfcdd2e17978d7935e9e')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
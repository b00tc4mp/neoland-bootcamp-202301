const { connect, disconnect } = require('mongoose')
const retrievePhotographer = require('./retrievePhotographer')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        return retrievePhotographer('juan@amate.com')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
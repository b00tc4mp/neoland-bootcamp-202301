const { connect, disconnect } = require('mongoose')
const retrieveUser = require('./retrieveUser')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {   

        return retrieveUser('640ca23cba43626c02f95afc')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
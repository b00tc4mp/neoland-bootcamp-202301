const { connect, disconnect } = require('mongoose')
const updateListTitle = require('./updateListTitle')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return updateListTitle('640f26c1badaf9f70cbe9d05', '640f3d437095f6d2a477d6be', 'Montaña septiembre 2023')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
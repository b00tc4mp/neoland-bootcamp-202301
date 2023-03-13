const { connect, disconnect } = require('mongoose')
const archiveList = require('./archiveList')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return archiveList('640f26c1badaf9f70cbe9d05', '640f2a379d9f6bb503fa517f', true)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
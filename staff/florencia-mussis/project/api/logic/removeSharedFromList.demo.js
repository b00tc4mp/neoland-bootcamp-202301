const { connect, disconnect } = require('mongoose')
const removeSharedFromList = require('./removeSharedFromList')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {
        return removeSharedFromList('641724317600898905e5cb9e', '641b2b6f654b5913afb4e162', '641c3c44c8ef21a9439bd365')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
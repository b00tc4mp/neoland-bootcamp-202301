const { connect, disconnect } = require('mongoose')
const sharedList = require('./shareList')


connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {   
        return sharedList("641724317600898905e5cb9e","641b2b6f654b5913afb4e162", "pedro@gmail.com", "editor")
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
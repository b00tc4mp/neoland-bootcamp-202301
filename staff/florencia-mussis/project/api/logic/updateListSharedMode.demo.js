const { connect, disconnect } = require('mongoose')
const updateListSharedMode = require('./updateListSharedMode')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {
        return updateListSharedMode('641724317600898905e5cb9e', '641b2b6f654b5913afb4e162', '641c3cbcb64b70008ae6b457', 'editor')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
const { connect, disconnect } = require('mongoose')
const updateItemCheck = require('./updateItemCheck')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return updateItemCheck('641991db1cb80afb831faf03', '641b2b6f654b5913afb4e162','641d687477a8348abd177646', false )
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

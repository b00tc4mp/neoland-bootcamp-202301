const { connect, disconnect } = require('mongoose')
const unregisterUser = require('./unregisterUser')

connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {
        return unregisterUser("6400898a733d9845dcfdd8de", "123123123")

    })
    .then(result => console.log(result))
    .catch(error => console.error(error.message))
    .finally(() => disconnect())

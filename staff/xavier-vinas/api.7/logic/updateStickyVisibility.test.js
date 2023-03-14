const { connect, disconnect } = require('mongoose')
const updateStickyVisibility = require('./updateStickyVisibility')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return updateStickyVisibility('400898a733d9845dcfdd8de', '6400af6a65b0a7dace81191e', 'private')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
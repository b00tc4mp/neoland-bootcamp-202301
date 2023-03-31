const { connect, disconnect } = require('mongoose')
const updateStickyVisibility = require('./updateStickyVisibility')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return updateStickyVisibility('6400ae788a9c26a0c9b403c9', '6400ae788a9c26a0c9b403cc', 'private')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
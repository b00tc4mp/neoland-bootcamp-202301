const { connect, disconnect } = require('mongoose')
const updateStickyColor = require('./updateStickyColor')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return updateStickyColor('6400b46a537e25951ae65548', '6400b66e184c85b96401eade', 'red')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
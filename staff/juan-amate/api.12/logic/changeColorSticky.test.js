const { connect, disconnect } = require('mongoose')
const changeStickyColor = require('./changeStickyColor')



connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return changeStickyColor('6400bf9f09116c5d4d80013c', '6400fcd12cd5a1154818a38f', 'red')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
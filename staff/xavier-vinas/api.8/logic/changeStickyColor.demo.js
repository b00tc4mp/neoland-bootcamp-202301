const { connect, disconnect } = require('mongoose')
const changeStickyColor = require('./changeStickyColor')



connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return changeStickyColor('6400ae788a9c26a0c9b403c9', '6400ae788a9c26a0c9b403cc', 'purple')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
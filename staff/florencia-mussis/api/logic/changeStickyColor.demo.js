const { connect, disconnect } = require('mongoose')
const changeStickyColor = require('./changeStickyColor')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {

        return changeStickyColor('640086c888044024d15d2cdf', '640086c888044024d15d2ce3', 'red')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
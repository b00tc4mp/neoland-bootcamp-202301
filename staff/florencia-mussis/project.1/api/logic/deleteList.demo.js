const { connect, disconnect } = require('mongoose')
const deleteList = require('./deleteList')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return deleteList('640f075a659f1454f3310073', '640f10a84bdcf77ee10a1a50')
    })
.then(result => console.log(result))
.catch(error => console.error(error))
.finally(() => disconnect())
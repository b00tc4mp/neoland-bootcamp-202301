const { connect, disconnect } = require('mongoose')
const deleteItem = require('./deleteItem')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return deleteItem('64122fe51dbae39422f2da1e', '64123226e5d7ba973008e5b7', '6412ee83e5b599c4686aea14')
    })
.then(result => console.log(result))
.catch(error => console.error(error))
.finally(() => disconnect())
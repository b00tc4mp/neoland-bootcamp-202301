const { connect, disconnect } = require('mongoose')
const deleteSticky = require('./deleteSticky')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {

        return deleteSticky('64009221331c8171b5806079', '6400a7f71b32b590d913b183')
    })
.then(result => console.log(result))
.catch(error => console.error(error))
.finally(() => disconnect())
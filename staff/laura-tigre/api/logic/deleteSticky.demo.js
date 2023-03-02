const { connect, disconnect } = require('mongoose')
const deleteSticky= require('./deleteSticky')


connect('mongodb://127.0.0.1:27017/mydb')
    .then(()=>{
        return deleteSticky('640087dd4c53716e0162dbee','640087dd4c53716e0162dbee')
    })
.then(result => console.log(result))
.catch(error=> console.error(error))
.finally(()=> disconnect())
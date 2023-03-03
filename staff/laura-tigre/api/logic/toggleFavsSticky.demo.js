const { connect, disconnect } = require('mongoose')
const toggleFavsSticky= require('./toggleFavsSticky')



connect('mongodb://127.0.0.1:27017/mydb')
    .then(() =>{
       

        return toggleFavsSticky('6400fb4c4014d51c1636c92c','6400f71c4014d51c1636c884')

    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
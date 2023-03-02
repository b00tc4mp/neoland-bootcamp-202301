const { connect, disconnect } = require('mongoose')
const toggleLikeSticky= require('./toggleLikeSticky')



connect('mongodb://127.0.0.1:27017/mydb')
    .then(() =>{
       

        return toggleLikeSticky('6400a7f148c755b7f3af4076','6400b13bb7301abdce659b81')



    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
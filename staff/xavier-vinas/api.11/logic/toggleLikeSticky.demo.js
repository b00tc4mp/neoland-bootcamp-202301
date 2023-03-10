const {connect,disconnect} = require('mongoose');
const toggleLikeSticky = require('./toggleLikeSticky')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
   

        return toggleLikeSticky('400898a733d9845dcfdd8de', '6400af6a65b0a7dace81191e"')



    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
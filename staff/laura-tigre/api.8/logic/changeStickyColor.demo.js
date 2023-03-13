const { connect, disconnect } = require('mongoose')
const changeStickyColor= require('./changeStickyColor')





connect('mongodb://127.0.0.1:27017/mydb')
    .then(() =>{
        

        return changeStickyColor('6400c7509b51c43bdd462fa8', '6400c76e9b51c43bdd462fab','green')

    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
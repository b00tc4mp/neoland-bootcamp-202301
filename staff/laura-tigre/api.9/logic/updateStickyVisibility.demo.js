const { connect, disconnect } = require('mongoose')
const updateStickyVisibility= require('./updateStickyVisibility')





connect('mongodb://127.0.0.1:27017/mydb')
    .then(()=>{
       

        return updateStickyVisibility('6400a7de48c755b7f3af4073', '6400a87d48c755b7f3af4085','private')

    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
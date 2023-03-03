const { connect, disconnect } = require('mongoose')
const toggleFavsSticky = require('./toggleFavsSticky')


connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
      
        return toggleFavsSticky('6402187ab41ba9c855737df6','64021888b41ba9c855737e00')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
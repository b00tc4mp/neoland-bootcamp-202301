const { connect, disconnect } = require('mongoose')
const toggleFavSticky = require('./toggleFavSticky')


connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
      
        return toggleFavSticky('6402187ab41ba9c855737df6','64021888b41ba9c855737e00')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
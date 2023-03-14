const { connect, disconnect } = require('mongoose')
const deleteSticky = require('./deleteSticky')

connect('mongodb://127.0.0.1:27017/mydb')
  .then(() => {
    return deleteSticky('6400bf9f09116c5d4d80013c', '6400bfa509116c5d4d800146')
  })
  .then(result => console.log(result))
  .catch(error => console.error(error.message))
  .finally(() => disconnect())
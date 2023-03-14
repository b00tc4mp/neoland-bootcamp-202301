const { connect, disconnect } = require('mongoose')
const createSticky = require('./createSticky')

connect('mongodb://127.0.0.1:27017/mydb')
  .then(() => {
    return createSticky('640091726b074d4319549b8e', 'Hola mundo!', 'public')
  })
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => disconnect())
const { connect, disconnect } = require('mongoose')
const toggleLikeSticky = require('./toggleLikeSticky')


connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
      
        return toggleLikeSticky('64009221331c8171b5806079','640086c888044024d15d2ce2')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
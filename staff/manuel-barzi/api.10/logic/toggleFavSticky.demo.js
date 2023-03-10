const { connect, disconnect } = require('mongoose')
const toggleFavSticky = require('./toggleFavSticky')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return toggleFavSticky('6400b46a537e25951ae65548', '6401e05fb9cd3f743e7b221f')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
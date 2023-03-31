const { connect, disconnect } = require('mongoose')
const updateStickyText = require('./updateStickyText')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return updateStickyText('640091726b074d4319549b8e', '6400ae5cf8827dcd0ae6e8b3', 'HELLO WORLD!!!!!')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
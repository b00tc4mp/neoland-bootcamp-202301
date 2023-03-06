const { connect, disconnect } = require('mongoose')
const retrieveFavsStickies = require('./retrieveFavsStickies')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return retrieveFavsStickies('64033f6a6e35339705d77c5f')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())


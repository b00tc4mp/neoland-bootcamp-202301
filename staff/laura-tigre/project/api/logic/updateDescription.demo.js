const { connect, disconnect } = require('mongoose')
const updateDescription = require('./updateDescription')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return updateDescription('6415f60fb2848a15a4bf6b40','6415f60fb2848a15a4bf6b4b' ,'I am a student of the University and I love kids')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

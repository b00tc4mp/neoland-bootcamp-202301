const { connect, disconnect } = require('mongoose')
const updateDescription = require('./updateDescription')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return updateDescription('6415f5e39e3d8c682f1fbee7','6415f5e59e3d8c682f1fbef2','I am a student of the University and I love kids')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

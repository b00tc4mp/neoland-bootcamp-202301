const { connect, disconnect } = require('mongoose')
const updateExperience = require('./updateExperience')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return updateExperience('6415f60fb2848a15a4bf6b40','6415f60fb2848a15a4bf6b4b' ,8)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

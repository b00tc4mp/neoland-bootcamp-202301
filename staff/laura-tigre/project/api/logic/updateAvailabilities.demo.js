const { connect, disconnect } = require('mongoose')
const updateAvailabilities = require('./updateAvailabilities')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return updateAvailabilities('6415f60fb2848a15a4bf6b40','6415f60fb2848a15a4bf6b4b' ,true, false, false,  false,false,false,  false,false,false, false,false,false, false,false,false, false,false,false,false,false,false)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

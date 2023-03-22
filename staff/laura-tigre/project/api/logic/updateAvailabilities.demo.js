const { connect, disconnect } = require('mongoose')
const updateAvailabilities = require('./updateAvailabilities')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return updateAvailabilities('641a9f8e941192a2c573c005','641a9f8e941192a2c573c010' ,true, false, true,  false,false,false,  false,false,false, false,false,false, false,false,false, false,false,false,true,true,true)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

const { connect, disconnect } = require('mongoose')
const updateStickyText = require('./updateStickyText')



connect('mongodb://127.0.0.1:27017/mydb')
    .then(()=> {
        

        return updateStickyText('6400a7de48c755b7f3af4073', '6400a87d48c755b7f3af4085','hellow world')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
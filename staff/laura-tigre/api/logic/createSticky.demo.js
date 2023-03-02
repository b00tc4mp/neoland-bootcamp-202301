const { connect, disconnect } = require('mongoose')
const createSticky=require('./createSticky')


connect('mongodb://127.0.0.1:27017/mydb')

    .then(() => {
       

        return createSticky('6400a7f148c755b7f3af4076','test 1', 'public')
    })
    .then(result => console.log(result))
    .catch(error=> console.error(error))
    .finally(() => disconnect())
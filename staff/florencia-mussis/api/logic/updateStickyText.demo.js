const { connect, disconnect } = require('mongoose')
const updateStickyText = require('./updateStickyText')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {

        return updateStickyText('64009221331c8171b5806079', '6400a7e45fd54be2b4000af4', 'holis mundo')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
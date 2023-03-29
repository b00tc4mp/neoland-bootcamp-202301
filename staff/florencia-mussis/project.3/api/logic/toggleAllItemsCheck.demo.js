const { connect, disconnect } = require('mongoose')
const toggleAllItemsCheck = require('./toggleAllItemsCheck')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {

        return toggleAllItemsCheck('641724317600898905e5cb9e', '641725df7600898905e5ced9')
    })
.then(result => console.log(result))
.catch(error => console.error(error))
.finally(() => disconnect())
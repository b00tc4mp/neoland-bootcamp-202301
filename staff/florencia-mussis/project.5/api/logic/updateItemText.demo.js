const { connect, disconnect } = require('mongoose')
const updateItemText = require('./updateItemText')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {
        return updateItemText('641991db1cb80afb831faf03', '64199e681cb80afb831fb189', '64199e7c1cb80afb831fb1c9', "agua")
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

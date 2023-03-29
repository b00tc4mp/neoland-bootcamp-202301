const { connect, disconnect } = require('mongoose')
const removeCheckedItemsFromList = require('./removeCheckedItemsFromList')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {
        return removeCheckedItemsFromList('64199e5e1cb80afb831fb179', '64199e681cb80afb831fb189')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
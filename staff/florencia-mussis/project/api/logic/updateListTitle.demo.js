const { connect, disconnect } = require('mongoose')
const updateListTitle = require('./updateListTitle')

connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {
        return updateListTitle('641c39df610572049417d4de', '641b2b6f654b5913afb4e162', 'Montaña septiembre 2023')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
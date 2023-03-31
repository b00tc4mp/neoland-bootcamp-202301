const { connect, disconnect } = require('mongoose');
const toggleFavsSticky = require('./toggleFavSticky');


connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {

        return toggleFavsSticky('640087cd7bfed39a963a2a17', '6401da43d481a9d57aea5ecd');
    
    })
    .then (result =>console.log(result))
    .catch(error => console.log(error))
    .finally(() => disconnect())
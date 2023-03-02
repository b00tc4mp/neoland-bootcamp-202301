const { connect, disconnect } = require('mongoose')
const retrievePublicStickies = require('./retrievePublicStickies')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return retrievePublicStickies('640091726b074d4319549b8e')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
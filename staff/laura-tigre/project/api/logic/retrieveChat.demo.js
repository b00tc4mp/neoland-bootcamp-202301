const { connect, disconnect } = require('mongoose')
const retrieveChat = require('./retrieveChat')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return retrieveChat('641ae08f39ec536dfed3549a','6422c4dce4ed97b5acd57e31')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
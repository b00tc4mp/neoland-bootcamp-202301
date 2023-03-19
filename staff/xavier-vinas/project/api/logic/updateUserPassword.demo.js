const { connect, disconnect } = require('mongoose')
const updateUserPassword = require('./updateUserPassword')


connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {

        return updateUserPassword('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDE1NzIwYzJhNzRkMTY4NWM1ODY4ZDYiLCJpYXQiOjE2NzkxMjcyMjEsImV4cCI6MTY3OTEzMDgyMX0.e3-VGV8g30sAWKXelE7wC8VVXRGQbjGoWhQ6A3QMMDE', '123123123', '234234234', '234234234')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect)
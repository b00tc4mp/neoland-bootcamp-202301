const { MongoClient } = require('mongodb')
const deleteSticky = require('./deleteSticky')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        //return deleteSticky('user-1676975539753', '63f74ad11f44c4a9bff08b17')
        return deleteSticky('user-1676970622765', '63f74926e10f32128288b692')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error.message))

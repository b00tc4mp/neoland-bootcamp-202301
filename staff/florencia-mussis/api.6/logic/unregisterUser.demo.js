const { MongoClient } = require('mongodb')
const unregisterUser = require('./unregisterUser')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {   
        const db = connection.db('mydb')
        process.db = db

        return unregisterUser('63fc95f3282c344d2c959d58', '123123123')
    })
    .then(result => console.log(result))
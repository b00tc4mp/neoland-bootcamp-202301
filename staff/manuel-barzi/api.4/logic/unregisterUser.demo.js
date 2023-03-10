const { MongoClient } = require('mongodb')
const unregisterUser = require('./unregisterUser')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return unregisterUser('63fc8586aac6a5b46abb9147', '123123123')
    })
    .then(result => console.log(result))
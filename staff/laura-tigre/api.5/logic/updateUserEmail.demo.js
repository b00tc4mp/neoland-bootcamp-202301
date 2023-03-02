const { MongoClient } = require('mongodb')
const updateUserEmail = require('./updateUserEmail')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return updateUserEmail('63fcf90d17ce12484bdb5384','123123123','ltigre@gmail.com')
    })
    .then(result => console.log(result))

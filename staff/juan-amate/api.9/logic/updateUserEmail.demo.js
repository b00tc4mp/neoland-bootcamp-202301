const { MongoClient } = require('mongodb')
const updateUserEmail = require('./updateUserEmail')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return updateUserEmail('63fe037a876dce58dd555203', 'mama@rach.com', '234234234')
    })
    .then(result => console.log(result))
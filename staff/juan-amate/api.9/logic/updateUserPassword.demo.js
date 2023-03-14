const { MongoClient } = require('mongodb')
const updateUserPassword = require('./updateUserPassword')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return updateUserPassword('63fe037a876dce58dd555203', '123123123', '234234234', '234234234')
    })
    .then(result => console.log(result))
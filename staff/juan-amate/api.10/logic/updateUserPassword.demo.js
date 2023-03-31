const { MongoClient } = require('mongodb')
const updateUserPassword = require('./updateUserPassword')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return updateUserPassword('63fe30e9f98697157b129232', '123123123', '234234234', '234234234')
    })
    .then(result => console.log(result))
const { MongoClient } = require('mongodb')
const retrieveUser = require('./retrieveUser')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return retrieveUser('63fc90e43e19d8fd3389d726')
    })
    .then(result => console.log(result))


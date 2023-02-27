const { MongoClient } = require('mongodb')
const retrieveUser = require('./retrieveUser')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {   
        const db = connection.db('mydb')
        process.db = db

        return retrieveUser('63fc95f3282c344d2c959d58')
    })
    .then(result => console.log(result))
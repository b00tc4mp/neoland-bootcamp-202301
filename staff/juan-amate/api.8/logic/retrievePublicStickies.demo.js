const { MongoClient } = require('mongodb')
const retrievePublicStickies = require('./retrievePublicStickies')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return retrievePublicStickies()
    })
    .then(result = console.log(result))
const { MongoClient } = require('mongodb')
const retrieveMyStickies = require('./retrievePublicStickies')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return retrieveMyStickies('user-1676901888410')
    })
    .then(result = console.log(result))


const { MongoClient } = require('mongodb')
const retrieveMyStickies = require('./retrieveMyStickies')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return retrieveMyStickies('user-1676975539753')
    })
    .then(result => console.log(result))
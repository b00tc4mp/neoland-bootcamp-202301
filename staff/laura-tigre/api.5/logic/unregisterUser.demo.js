const { MongoClient } = require('mongodb')
const unregisterUser = require('./unregisterUser')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return unregisterUser('63fc9c5b3896e9d962186ec8', '234234234')
    })
    .then(result => console.log(result))

module.exports = unregisterUser
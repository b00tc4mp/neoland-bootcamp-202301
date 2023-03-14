const { MongoClient } = require('mongodb')
const unregisterUser = require('./unregisterUser')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return unregisterUser('63fc9261fe651b09da6faff8', '234234234')
    })
    .then(result => console.log(result))
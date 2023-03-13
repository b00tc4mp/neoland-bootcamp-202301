const { MongoClient } = require('mongodb')
const authenticateUser = require('./authenticateUser')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {   
        const db = connection.db('mydb')
        process.db = db

        return authenticateUser('pepito@grillo.com', '234234234')
    })
    .then(result => console.log(result))
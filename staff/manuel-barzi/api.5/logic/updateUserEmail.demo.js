const { MongoClient } = require('mongodb')
const updateUserEmail = require('./updateUserEmail')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return updateUserEmail('63fc8c27545d81745fa9d251', 'pepito@grillo2.com', '123123123')
    })
    .then(result => console.log(result))
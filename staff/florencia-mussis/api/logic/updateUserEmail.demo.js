const { MongoClient } = require('mongodb')
const updateUserEmail = require('./updateUserEmail')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {   
        const db = connection.db('mydb')
        process.db = db

        return updateUserEmail('63fdd9e4cae21f9dbad926a9','florencia@mussis.com', '123123123')
    })
    .then(result => console.log(result))
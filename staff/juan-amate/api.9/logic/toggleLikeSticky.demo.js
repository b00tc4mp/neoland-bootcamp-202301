const { MongoClient } = require('mongodb')
const toggleLikeSticky = require('./toggleLikeSticky')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return toggleLikeSticky('user-1676990298205', '63f628a96fec06629e1a7f94')
    })
    .then(result => console.log(result))
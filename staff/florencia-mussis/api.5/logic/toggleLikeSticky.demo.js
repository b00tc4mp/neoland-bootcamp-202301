const { MongoClient } = require('mongodb')
const toggleLikeSticky = require('./toggleLikeSticky')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return toggleLikeSticky('user-1676988822365','63f62524b6ac9e206bc4d811')
    })
    .then(result => console.log(result))
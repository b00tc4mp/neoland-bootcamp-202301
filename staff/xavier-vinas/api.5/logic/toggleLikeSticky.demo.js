const { MongoClient } = require('mongodb')
const toggleLikeSticky = require('./toggleLikeSticky')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return toggleLikeSticky('user-1676904474178', '63f752d4e456ac3a2c00d003')



    })
    .then(result => console.log(result))
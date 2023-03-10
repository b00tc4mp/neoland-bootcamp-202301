const { MongoClient } = require('mongodb')
const toggleLikeSticky = require('./toggleLikeSticky')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        //return toggleLikeSticky('user-1676975539753', '63f74ad11f44c4a9bff08b17')
        //return toggleLikeSticky('user-1676968174257', '63f74ad11f44c4a9bff08b17')
        return toggleLikeSticky('user-1676970622765', '63f74ad11f44c4a9bff08b17')
    })
    .then(result => console.log(result))
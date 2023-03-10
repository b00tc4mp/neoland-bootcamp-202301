const { MongoClient } = require('mongodb')
const updateStickyVisibility = require('./updateStickyVisibility')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return updateStickyVisibility('user-1676975539753', '63f74ad11f44c4a9bff08b17', 'public')
    })
    .then(result => console.log(result))
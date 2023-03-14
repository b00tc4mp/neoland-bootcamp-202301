
const { MongoClient } = require('mongodb')
const updateStickyVisibility = require('./updateStickyVisibility')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return updateStickyVisibility('user-1676904474178', '63f752d4e456ac3a2c00d003', 'private')
    })
    .then(result => console.log(result))
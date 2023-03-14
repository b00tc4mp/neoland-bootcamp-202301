const { MongoClient } = require('mongodb')
const updateStickyVisibility = require('./updateStickyVisibility')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return updateStickyVisibility('user-1676901888410', '63f640926fec06629e1a7f95', 'private')
    })
    .then(result => console.log(result))
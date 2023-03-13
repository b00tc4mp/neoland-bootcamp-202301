const { MongoClient } = require('mongodb')
const updateStickyText = require('./updateStickyText')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return updateStickyText('user-1676988822365', '63f756c4b3301540c3144fcb', 'holis mundo')
    })
    .then(result => console.log(result))
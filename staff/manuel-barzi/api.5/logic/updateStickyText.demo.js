const { MongoClient } = require('mongodb')
const updateStickyText = require('./updateStickyText')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return updateStickyText('user-1676975539753', '63f74ad11f44c4a9bff08b17', 'BOM DIA 2')
    })
    .then(result => console.log(result))
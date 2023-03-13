const { MongoClient } = require('mongodb')
const updateStickyText = require('./updateStickyText')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return updateStickyText('user-1676992518546', '63f624d4428273017ea2c922','hellow world')
    })
    .then(result => console.log(result))
const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')

        const stickies = db.collection('stickies')

        return stickies.find().toArray()
    })
    .then(all => console.log(all))
    .catch(error => console.error(error))
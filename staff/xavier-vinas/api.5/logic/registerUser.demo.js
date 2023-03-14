const { MongoClient } = require('mongodb');
const registerUsers = require('./registerUser');

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db("mydb");
        process.db = db;

        return registerUsers('Aurelio Mazapan', 27, 'aurelio@mazapan.com', '123123123')

    })
    .then(result => console.log(result))
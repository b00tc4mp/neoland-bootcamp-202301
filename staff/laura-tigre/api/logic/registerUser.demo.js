const { MongoClient } = require('mongodb')
const registerUser = require('./registerUser')

const client = new MongoClient('mongodb://127.0.0.1:27017')



client.connect()

    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return registerUser('Laura Tigre', 40, 'lauratigre@gmail.com', '123123123')
    })
    .then(result => console.log(result))



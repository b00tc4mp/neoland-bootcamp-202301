const { MongoClient } = require("mongodb")
const registerUser = require("./registerUser")

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        return registerUser('Pepito Grillo', 30, 'pepito@grillo.com', '123123123')
    })
    .then(result => console.log(result))

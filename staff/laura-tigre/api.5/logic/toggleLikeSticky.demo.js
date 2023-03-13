const {MongoClient}= require('mongodb')
const toggleLikeSticky= require('./toggleLikeSticky')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection =>{
        const db= connection.db('mydb')
        process.db= db

        return toggleLikeSticky('user-1676964448745','63f624d4428273017ea2c922')



    })
    .then(result => console.log(result))
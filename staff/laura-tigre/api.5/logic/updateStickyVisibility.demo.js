const {MongoClient} = require('mongodb')
const updateStickyVisibility= require('./updateStickyVisibility')


const client = new MongoClient('mongodb://127.0.0.1:27017')


client.connect()
    .then(connection =>{
        const db = connection.db('mydb')
        process.db= db

        return updateStickyVisibility('user-1676992518546', '63f624d4428273017ea2c922','private')

    })
    .then(result => console.log(result))
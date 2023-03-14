const { MongoClient } = require('mongodb');
const updateUserEmail = require('./updateUserEmail');


const client = new MongoClient("mongodb://127.0.0.1:27017")

client.connect()
    .then(() => { 
        const db = client.db("mydb");
        process.db = db;

        return updateUserEmail('63fdc7f99b138fcab3b8f7e0', 'manolo@pum.com', '123123123');
        
    })
    .then(result => console.log(result))

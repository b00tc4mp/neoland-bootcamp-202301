const{MongoClient}= require('mongodb')
const createSticky=require('./createSticky')

const client = new MongoClient('mongo://127.0.0.1:27017')

client.connect()

    .then(connection => {
        const db= connection.db('mydb')
        process.db=db

        return createSticky('user-1676992518546','test 1', 'public')
    })
    .then(result => console.log(result))
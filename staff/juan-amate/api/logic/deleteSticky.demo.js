const { MongoClient } = require('mongodb')
const deleteSticky = require('./deleteSticky')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
  .then(connection => {
    const db = connection.db('mydb')
    process.db = db

    return deleteSticky('user-1676901888410', '63f640926fec06629e1a7f95')
  })
  .then(result => console.log(result))
  .catch(error => console.error(error.message))
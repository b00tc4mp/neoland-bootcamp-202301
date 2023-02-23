const { MongoClient, ObjectId } = require('mongodb')
//traemos o

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')

        const stickies = db.collection('stickies')

        return stickies.find().toArray()
    })
    .then(all => console.log(all))
    .catch(error => console.error(error))


    .then(connection => {
        // insertar sticky en la db
        const db = connection.db("mydb")

        const stickies = db.collection("stickies")

        const sticky = {

            user: 'user-1676980509816',
            text: 'hello world',
            visibility: 'public',
            likes: []

        }
        return stickies.insertOne(sticky)
    })
    .then(response => console.log(response))
    .catch(error => console.error(error))


    .then(connection => {
        //update
        const db = connection.db("mydb")

        const stickies = db.collection("stickies")

        const sticky = {

            visibility: "private"

        }
        return stickies.updateOne({ "_id": new ObjectId("63f6405a5459f53cdf021cf8") }, { $set: sticky })
    })
    .then(response => console.log(response))
    .catch(error => console.error(error))


    .then(connection => {
        //delete
        const db = connection.db("mydb")

        const stickies = db.collection("stickies")

        return stickies.deleteOne({ "_id": new ObjectId("63f6405a5459f53cdf021cf8") })


    })
    .then(response => console.log(response))
    .catch(error=>console.error(error))
    //
    .then(connection => {
        const db = connection.db('mydb')

        const stickies = db.collection('stickies')

        return stickies.find().toArray()
    })
    .then(all => console.log(all))
    .catch(error => console.error(error))

    
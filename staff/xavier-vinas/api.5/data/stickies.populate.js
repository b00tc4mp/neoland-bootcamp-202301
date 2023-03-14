const { MongoClient, ObjectId } = require('mongodb')

//const client = new MongoClient('mongodb://localhost:27017')
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')

        const stickies = db.collection('stickies')

        // TODO find stickies in db

        //return stickies.find().toArray()

        // const query = { text: { $regex: "[0-9]" } }
        // return stickies.find(query).toArray()

        // const query = { text: { $regex: /CH[A-Z].*/i } }
        // return stickies.find(query).toArray()

        //return stickies.find({ visibility: 'public' }).toArray()

        //const query = { likes: 'user-1676968174257' }
        const query = { likes: { $all: ['user-1676988978003', 'user-1676980759847'] } }
        return stickies.find(query).toArray()
    })
    .then(result => console.log(result))

    // .then(connection => {
    //     const db = connection.db('mydb')

    //     const stickies = db.collection('stickies')

    //     // TODO write a sticky in db
    //     const sticky = {
    //         user: 'user-1676975539753',
    //         text: 'hello thursday 3',
    //         visibility: 'public',
    //         likes: []
    //     }

    //     return stickies.insertOne(sticky)
    // })
    // .then(result => console.log(result))

    // .then(connection => {
    //     const db = connection.db('mydb')

    //     const stickies = db.collection('stickies')

    //     // TODO update sticky in db

    //     //return stickies.updateOne({ _id: new ObjectId('63f72844832905ddf1f07d27') }, { $set: { text: 'hello thursday 10' } })
    //     //return stickies.updateOne({ _id: new ObjectId('63f728faeb66f2dd6fc0bde5') }, { $set: { visibility: 'private' } })
    //     //return stickies.updateOne({ _id: new ObjectId('63f729193b75084cd8d2cde4') }, { $push: { likes: 'user-1676968174257' } })
    //     return stickies.updateOne({ _id: new ObjectId('63f729193b75084cd8d2cde4') }, { $push: { likes: 'user-1676970622765' } })
    // })
    // .then(result => console.log(result))

    // .then(connection => {
    //     const db = connection.db('mydb')

    //     const stickies = db.collection('stickies')

    //     // TODO delete sticky in db

    //     return stickies.deleteOne({ _id: new ObjectId('63f728faeb66f2dd6fc0bde5') })
    // })
    // .then(result => console.log(result))

    .then(() => client.close())
    .catch(error => console.error(error))
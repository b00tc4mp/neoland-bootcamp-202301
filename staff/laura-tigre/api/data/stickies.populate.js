const { MongoClient, ObjectId } = require('mongodb')
// const {ObjectId}= require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    // .then(connection => {
    //     const db = connection.db('mydb')

    //     const stickies = db.collection('stickies')

    //     return stickies.find().toArray()
    // })
    // .then(all => console.log(all))
    // .catch(error => console.error(error))

    //  .then(connection =>{
    //    //insertar sticky en la base de datos
    //     const db = connection.db('mydb')

    //     const stickies= db.collection('stickies')

    //     const sticky={
    //         user: 'user-1676968593738',
    //         text: 'hello world',
    //         visibility: 'public',
    //         likes:[]
    //     }

    //     return stickies.insertOne(sticky)
    //  })
    //  .then(response => console.log(response))
    //  .catch(error=> console.error(error))
    // .then(connection=>{
    //  //update

    //     const db=connection.db('mydb')

    //     const stickies= db.collection('stickies')

    //     const sticky ={
    //         visibility:"private"
    //     }


    //     return stickies.updateOne({"_id": new ObjectId("63f640a9636d4b52fa3bc636")}, {$set:sticky})
    // })
    // .then (response=> console.log(response))
    // .catch(error=> console.error(error))

    // .then(connection=>{
    //      //update

    //         const db=connection.db('mydb')

    //         const stickies= db.collection('stickies')

    //         return stickies.deleteOne({"_id": new ObjectId("63f640a9636d4b52fa3bc636")})

    // })
    // .then (response=> console.log(response))
    // .catch(error=> console.error(error))

    .then(connection => {
        //update

        const db = connection.db('mydb')

        const stickies = db.collection('stickies')
        return stickies.find({user:'user-1676992518546', visibility:'public'}).toArray()
    })
    .then(all => console.log(all))
    .catch(error => console.error(error))

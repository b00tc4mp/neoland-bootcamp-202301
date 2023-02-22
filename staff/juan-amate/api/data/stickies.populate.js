const { MongoClient, ObjectId } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    // LISTAR STICKIES
    // .then(connection => {
    //     const db = connection.db('mydb')

    //     const stickies = db.collection('stickies')

    //     return stickies.find().toArray()
    // })
    // .then(all => console.log(all))
    // .catch(error => console.error(error))

    // INSERTAR NUEVO STICKY
    //    .then(connection => {

    //         const db = connection.db('mydb')

    //         const stickies = db.collection('stickies')

    //         return stickies.insertOne({
    //             user: "user-1676901888410",
    //             text: "ciao mondo",
    //             visibility: "private",
    //             likes: []
    //         })
    //     }) 
    //     .then(response => console.log(response))
    //     .catch(error => console.error(error))

    // UPDATE STICKY
    // .then(connection => {

    //     const db = connection.db('mydb')

    //     const stickies = db.collection('stickies')

    //     const sticky = { visibility: "public" }

    //     return stickies.updateOne({ "_id": new ObjectId("63f64062b447db6043614360") }, { $set: sticky })
    // })
    // .then(response => console.log(response))
    // .catch(error => console.error(error))

    // DELETE STICKY
    // .then(connection => {

    //     const db = connection.db('mydb')

    //     const stickies = db.collection('stickies')

    //     return stickies.deleteOne({ "_id": new ObjectId("63f64062b447db6043614360") })
    // })
    // .then(response => console.log(response))
    // .catch(error => console.error(error))

    // BUSCAR POR UNA CONDICION
    .then(connection => {
        const db = connection.db('mydb')

        const stickies = db.collection('stickies')

        return stickies.find({ user: 'user-1676901888410', visibility: "public " }).toArray()
    })
    .then(all => console.log(all))
    .catch(error => console.error(error))
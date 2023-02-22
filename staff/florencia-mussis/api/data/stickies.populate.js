const { MongoClient, ObjectId } = require('mongodb')


const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect() //cdo el cliente se conecta
//     .then(connection => {
//     const db = connection.db('mydb') //se conecta a mi bd

//     const stickies = db.collection('stickies') //va a la coleccion stickies dentro de la bd

//     return stickies.find().toArray() //los stickies que encuentre que los retorne en un array, lo que retorna seria all
// })
// .then(all => console.log(all))
// .catch(error => console.error(error))

//  //insertar sticky en la db
// .then(connection => {

//     const db = connection.db('mydb')

//     const stickies = db.collection('stickies')

//     const sticky = {
//         user: 'user-1676988822365',
//         text: 'hello world',
//         visibility: 'public',
//         likes: []
//     }

//     return stickies.insertOne(sticky)
// })
// .then(response => console.log(response))
// .catch(error => console.error(error))

//update
// .then(connection => {

//     const db = connection.db('mydb')

//     const stickies = db.collection('stickies')

//     const sticky = {
//         visibility: 'private',
//     }


//     return stickies.updateOne({ '_id':new ObjectId ("63f6406588f8314cd0673a75") }, { $set: sticky })
// })
// .then(response => console.log(response))
// .catch(error => console.error(error))

//delete

// .then(connection => {
//     const db = connection.db('mydb')

//     const stickies = db.collection('stickies')

//     return stickies.deleteOne({ '_id':new ObjectId ("63f6406588f8314cd0673a75") })
// })
// .then(response => console.log(response))
// .catch(error => console.error(error))


// find con una condicion
.then(connection => {
    const db = connection.db('mydb') //se conecta a mi bd

    const stickies = db.collection('stickies') //va a la coleccion stickies dentro de la bd

    return stickies.find({user:'user-1676463294015', visibility: 'public'}).toArray() //los stickies que encuentre que los retorne en un array, lo que retorna seria all
})
.then(all => console.log(all))
.catch(error => console.error(error))
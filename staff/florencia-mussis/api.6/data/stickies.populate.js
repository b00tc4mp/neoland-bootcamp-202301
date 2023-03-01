const { MongoClient, ObjectId } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017') //para conectar con mongo

client.connect() //cdo el cliente se conecta

// Recuperar todos los stickies en un array
// .then(connection => {
//     const db = connection.db('mydb') //se conecta a mi bd

//     const stickies = db.collection('stickies') //va a la coleccion stickies dentro de la bd

//     return stickies.find().toArray() //los stickies que encuentre que los retorne en un array, lo que retorna seria all
// })
// .then(all => console.log(all))
// .then(() => client.close())
// .catch(error => console.error(error))

//Insertar sticky en la db
// .then(connection => {
//     const db = connection.db('mydb')

//     const stickies = db.collection('stickies') puede haber mas de una coleccion por eso le indicas cual

//     const sticky = {
//         user: 'user-1676988822365',
//         text: 'hello world',
//         visibility: 'public',
//         likes: []
//     }

//     return stickies.insertOne(sticky)
// })
// .then(result => console.log(result))
// .then(() => client.close())
// .catch(error => console.error(error))

//Update sticky
// .then(connection => {
//     const db = connection.db('mydb')

//     const stickies = db.collection('stickies')

//     const sticky = {
//         visibility: 'private',
//     }

//     return stickies.updateOne({ _id:new ObjectId ("63f6406588f8314cd0673a75") }, { $set: sticky })
// })
// .then(response => console.log(response))
// .then(() => client.close())
// .catch(error => console.error(error))
// '_id':new ObjectId ("63f6406588f8314cd0673a75")  tengo que crear ObjetId, es una funcion de mongo que debemos importar, se pone el new pq es una funcion que crea el objeto, es una funcion constructora, lo busca por id
// { $set: sticky }) le indicamos lo q quiere cambiar

//agregar dato a un array sticky
// .then(connection => {
//     const db = connection.db('mydb')

//     const stickies = db.collection('stickies')

//     return stickies.updateOne({ _id:new ObjectId ("63f6406588f8314cd0673a75") }, { $push: {likes: 'user-'} })
// })
// .then(response => console.log(response))
// .then(() => client.close())
// .catch(error => console.error(error))
// '_id':new ObjectId ("63f6406588f8314cd0673a75")  tengo que crear ObjetId, es una funcion de mongo que debemos importar, se pone el new pq es una funcion que crea el objeto, es una funcion constructora, lo busca por id
// { $push }) le indicamos lo q quiere agregar al array

//Delete
// .then(connection => {
//     const db = connection.db('mydb')

//     const stickies = db.collection('stickies')

//     return stickies.deleteOne({ '_id':new ObjectId ("63f6406588f8314cd0673a75") })
// })
// .then(response => console.log(response))
// .then(() => client.close())
// .catch(error => console.error(error))


// Find con una condicion
// .then(connection => {
//     const db = connection.db('mydb') //se conecta a mi bd

//     const stickies = db.collection('stickies') //va a la coleccion stickies dentro de la bd

//     return stickies.find({user:'user-1676463294015', visibility: 'public'}).toArray() //los stickies que encuentre que los retorne en un array, lo que retorna seria all
// })
// .then(result => console.log(result))
// .then(() => client.close())
// .catch(error => console.error(error))

//Find los stickies que contengan un campo ej: hola
// .then(connection => {
//     const db = connection.db('mydb') //se conecta a mi bd

//     const stickies = db.collection('stickies') //va a la coleccion stickies dentro de la bd
 
//     const query = { text: { $regex: "hola"}}

//     return stickies.find(query).toArray() //los stickies que encuentre que los retorne en un array, lo que retorna seria all
// })
// .then(result => console.log(result))
// .then(() => client.close())
// .catch(error => console.error(error))

//Update sticky in db
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

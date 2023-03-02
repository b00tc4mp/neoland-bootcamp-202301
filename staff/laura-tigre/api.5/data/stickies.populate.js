const { MongoClient, ObjectId } = require('mongodb')
// const {ObjectId}= require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    // .then(connection => {
    //     const db = connection.db('mydb')

    //     const stickies = db.collection('stickies')

    //     return stickies.find().toArray()
    // const query = {text:{$regex:"hola"}}regex busca un patron a cumplir
    //     return stickies.find(query).toArray()

    // })
    // .then(all => console.log(all))
    // .then(()=> client.close())
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
    //  .then(result => console.log(result))
    //  .then(()=> client.close()) para cerrar la conexion y no tener que hacer control+C
    //  .catch(error=> console.error(error))


    // .then(connection=>{
    //  //update

    //     const db=connection.db('mydb')

    //     const stickies= db.collection('stickies')

    //     const sticky ={
    //         visibility:"private"
    //     }


    //     return stickies.updateOne({"_id": new ObjectId("63f640a9636d4b52fa3bc636")}, {$set:sticky})
    //     return stickies.updateOne({"_id": new ObjectId("63f640a9636d4b52fa3bc636")}, {$push:{likes:'user-111111111'}
    // })
    // .then (response=> console.log(response))
    // .then(()=> client.close())
    // .catch(error=> console.error(error))



    // .then(connection=>{
    //      //update

    //         const db=connection.db('mydb')

    //         const stickies= db.collection('stickies')

    //         return stickies.deleteOne({"_id": new ObjectId("63f640a9636d4b52fa3bc636")})

    // })
    // .then (response=> console.log(response))
    // .then(()=> client.close())
    // .catch(error=> console.error(error))



    .then(connection => {
        //update

        const db = connection.db('mydb')

        const stickies = db.collection('stickies')
        return stickies.find({ user: 'user-1676992518546', visibility: 'public' }).toArray()

        //buscame el sticky que tenga el like de un usuario
        // const query={likes:'user-1111111111'}
        // return stickies.find(query).toArray()



    })
    .then(result => console.log(result))
    .then(() => client.close())
    .catch(error => console.error(error))

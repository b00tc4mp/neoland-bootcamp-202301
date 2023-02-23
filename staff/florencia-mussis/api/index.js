const express = require('express') //traemos el frameword express
const bodyParser = require('body-parser')

const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const unregisterUser = require('./logic/unregisterUser')
const updateUserPassword = require('./logic/updateUserPassword')
const cors = require("cors")
const { MongoClient } = require('mongodb')
const createSticky = require('./logic/createSticky')
const retrievePublicStickies = require('./logic/retrievePublicStickies')
const retrieveMyStickies = require('./logic/retrieveMyStickies')
const updateStickyText = require('./logic/updateStickyText')
const updateStickyVisibility = require('./logic/updateStickyVisibility')
const toggleLikeSticky = require('./logic/toggleLikeSticky')
const deleteSticky = require('./logic/deleteSticky')


const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect ()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        const server = express() // construimos el servidor
        const jsonBodyParser = bodyParser.json() //trasforma la request (los objetos del body que enviamos)

        server.use(cors())

        server.post('/users', jsonBodyParser, (req, res) => { //llamada al servidor con post, pq le mandamos datos a la api
            const user = req.body //enviamos el usuario que ponemos en body

            const { name, age, email, password } = user  //los datos que escribimos en el cuerpo de insomnia

            registerUser(name, age, email, password, error => {
                if (error) {
                    res.status(500).json({ error: error.message})
                    return
                }

                res.status(201).send() //los datos se han enviado correctamente y el usuario se ha registrado
            })
        })

        server.post('/users/auth', jsonBodyParser, (req, res) => {  //metodo post pq enviamos datos en el body
            const credentials = req.body

            const { email, password } = credentials

            authenticateUser( email, password, (error, userId) => {
                if (error) {
                    res.status(500).json({ error: error.message})
                    return
                }

                res.status(200).json({ userId })
            })
        })


        server.get('/users/:userId', (req, res) => {
            const userId = req.params.userId //params cuando se lo envio en la ruta, van los :

            retrieveUser(userId, (error, user) => {
                if (error) {
                    res.status(500).json({ error: error.message })

                    return
                }

                res.json(user) //devuelve el usuario si va bien convertido en json
            })
        })

        server.delete('/users/:userId',jsonBodyParser, (req, res) => { // jsonBodyParser traduce los datos q le enviamos
            const userId = req.params.userId

            const { password } = req.body //para extraer la propiedad password de body
            // const password = req.body.password

            unregisterUser(userId, password, error => {
                if (error) {
                    res.status(500).json({ error: error.message }) //devuelve el error como json

                    return
                }
                res.status(204).send()
            })
        })


        server.patch('/users/:userId', jsonBodyParser, (req, res) => { //patch es actualizar

            const userId = req.params.userId

            const credentials = req.body

            const { currentPassword, newPassword, newPasswordRepeat } = credentials

            updateUserPassword(userId, currentPassword, newPassword, newPasswordRepeat, error => {
                if (error) {
                    res.status(500).json({ error: error.message})

                    return
                }
                res.status(204).send()
            })
        })

        server.post('/stickies', jsonBodyParser, (req, res) => {
            const userId = req.headers.authorization.slice(7)
            const { text, visibility } = req.body

            createSticky(userId, text, visibility)
                .then(() => res.status(201).send())
                .catch(error => res.status(500).send(error.message))
        })

        server.get('/stickies', (req,res) => {
            retrievePublicStickies()
                .then(stickies => res.status(200).json(stickies))
                .catch(error => res.status(500).send(error.message))
        })

        server.get('/user/stickies', (req, res) => {
            const userId = req.headers.authorization.slice(7)

            retrieveMyStickies(userId)
                .then(stickies => res.status(200).json(stickies))
                .catch(error => res.status(500).send(error.message))
        })

        server.patch('/sticky/text/:stickyId', jsonBodyParser, (req, res) => {
            const { text } = req.body
            const userId = req.headers.authorization.slice(7)
            const { stickyId } = req.params

            updateStickyText(userId, stickyId, text)
                .then(() => res.status(201).send())
                .catch(error => res.status(500).send(error.message))
        })


        server.patch('/sticky/visibility/:stickyId', jsonBodyParser, (req, res) => {
            const { visibility } = req.body
            const userId = req.headers.authorization.slice(7)
            const { stickyId } = req.params

            updateStickyVisibility(userId, stickyId, visibility)
                .then(() => res.status(201).send())
                .catch(error => res.status(500).send(error.message))
        })

        server.patch('/sticky/likes/:stickyId', (req, res) => {
            const userId = req.headers.authorization.slice(7)
            const { stickyId } = req.params

            toggleLikeSticky(userId, stickyId)
                .then(() => res.status(201).send())
                .catch(error => res.status(500).send(error.message))
        })

        server.delete('/sticky/:stickyId', (req, res) => {
            const userId = req.headers.authorization.slice(7)
            const { stickyId } = req.params

            deleteSticky(userId, stickyId)
                .then(() => res.status(204).send())
                .catch(error => res.status(500).send(error.message))
        })

        server.listen(8080, () => console.log('server running on port' + 8080)) 
        
    })    

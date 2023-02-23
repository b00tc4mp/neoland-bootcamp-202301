const express = require('express')
const bodyParser = require('body-parser')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const unregisterUser = require('./logic/unregisterUser')
const updateUserPassword = require('./logic/updateUserPassword')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const createSticky = require('./logic/createSticky')
const retrievePublicStickies = require('./logic/retrievePublicStickies')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        const server = express()
        const jsonBodyParser = bodyParser.json()

        server.use(cors())

        server.post('/users', jsonBodyParser, (req, res) => {
            const user = req.body

            const { name, age, email, password } = user

            registerUser(name, age, email, password, error => {
                if (error) {
                    res.status(500).json({ error: error.message })

                    return
                }

                res.status(201).send()
            })
        })

        server.post('/users/auth', jsonBodyParser, (req, res) => {
            const credentials = req.body

            const { email, password } = credentials

            authenticateUser(email, password, (error, userId) => {
                if (error) {
                    res.status(500).json({ error: error.message })

                    return
                }

                res.status(200).json({ userId })
            })
        })

        server.get('/users/:userId', (req, res) => {
            // TODO retrieve user
            const userId = req.params.userId

            retrieveUser(userId, (error, user) => {
                if (error) {
                    res.status(500).json({ error: error.message })

                    return
                }

                res.json(user)
            })
        })

        server.delete('/users/:userId', jsonBodyParser, (req, res) => {
            // TODO unregister user
            //const userId = req.params.userId
            const { userId } = req.params
            //const password = req.body.password
            const { password } = req.body

            unregisterUser(userId, password, error => {
                if (error) {
                    res.status(500).json({ error: error.message })

                    return
                }

                res.status(204).send()
            })
        })

        server.patch('/users/:userId', jsonBodyParser, (req, res) => {
            // TODO update user password
            const { userId } = req.params
            const { currentPassword, newPassword, newPasswordRepeat } = req.body

            updateUserPassword(userId, currentPassword, newPassword, newPasswordRepeat, error => {
                if (error) {
                    res.status(500).json({ error: error.message })

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

        server.get('/stickies', (req, res) => {
            retrievePublicStickies()
                .then(stickies => res.status(200).json(stickies))
                .catch(error => res.status(500).send(error.message))
        })

        server.listen(8080, () => console.log('server running on port ' + 8080))
    })
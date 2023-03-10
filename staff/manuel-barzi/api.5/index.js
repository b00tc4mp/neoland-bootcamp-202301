const express = require('express')
const bodyParser = require('body-parser')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const unregisterUser = require('./logic/unregisterUser')
const updateUserPassword = require('./logic/updateUserPassword')
const updateUserEmail = require('./logic/updateUserEmail')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const createSticky = require('./logic/createSticky')
const retrievePublicStickies = require('./logic/retrievePublicStickies')
const retrieveMyStickies = require('./logic/retrieveMyStickies')
const updateStickyText = require('./logic/updateStickyText')
const updateStickyVisibility = require('./logic/updateStickyVisibility')
const toggleLikeSticky = require('./logic/toggleLikeSticky')
const deleteSticky = require('./logic/deleteSticky')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('mydb')
        process.db = db

        const server = express()
        const jsonBodyParser = bodyParser.json()

        server.use(cors())

        server.post('/users', jsonBodyParser, (req, res) => {
            try {
                const user = req.body

                const { name, age, email, password } = user

                registerUser(name, age, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const credentials = req.body

                const { email, password } = credentials

                authenticateUser(email, password)
                    .then(userId => res.status(200).json({ userId }))
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.get('/users', (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.delete('/users', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { password } = req.body

                unregisterUser(userId, password)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.patch('/users/password', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { password, newPassword, newPasswordConfirm } = req.body

                updateUserPassword(userId, password, newPassword, newPasswordConfirm)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.patch('/users/email', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { newEmail, password } = req.body

                updateUserEmail(userId, newEmail, password)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.delete('/users', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { password } = req.body

                unregisterUser(userId, password)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.post('/stickies', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { text, visibility } = req.body

                createSticky(userId, text, visibility)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.get('/stickies', (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)

                retrievePublicStickies(userId)
                    .then(stickies => res.status(200).json(stickies))
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.get('/stickies/user', (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)

                retrieveMyStickies(userId)
                    .then(stickies => res.status(200).json(stickies))
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.patch('/stickies/:stickyId/text', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { stickyId } = req.params
                const { text } = req.body

                updateStickyText(userId, stickyId, text)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.patch('/stickies/:stickyId/visibility', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { stickyId } = req.params
                const { visibility } = req.body

                updateStickyVisibility(userId, stickyId, visibility)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.patch('/stickies/:stickyId/likes', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { stickyId } = req.params

                toggleLikeSticky(userId, stickyId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.delete('/stickies/:stickyId', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { stickyId } = req.params

                deleteSticky(userId, stickyId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })

        server.listen(8080, () => console.log('server running on port ' + 8080))
    })
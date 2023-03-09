const express = require('express')
const bodyParser = require('body-parser')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const unregisterUser = require('./logic/unregisterUser')
const updateUserPassword = require('./logic/updateUserPassword')
const cors = require('cors')
const { connect, disconnect } = require('mongoose')
const createSticky = require('./logic/createSticky')
const retrievePublicStickies = require('./logic/retrievePublicStickies')
const retrieveMyStickies = require('./logic/retrieveMyStickies')
const updateStickyText = require('./logic/updateStickyText')
const updateStickyVisibility = require('./logic/updateStickyVisibility')
const toggleLikeSticky = require('./logic/toggleLikeSticky')
const deleteSticky = require('./logic/deleteSticky')
const updateUserEmail = require('./logic/updateUserEmail')
const changeStickyColor = require('./logic/changeStickyColor')
const toggleFavSticky = require('./logic/toggleFavSticky')
const retrieveFavStickies = require('./logic/retrieveFavStickies')
const { sign, verify } = require('jsonwebtoken')
const JWT_SECRET = 'lalaland'

const { FormatError, MissingError, AuthError, ConflictError } = require('com')




connect('mongodb://127.0.0.1:27017/mydb')

    .then(() => {
        const server = express()
        const jsonBodyParser = bodyParser.json()
        //transforma la request parqa el servidor
        server.use(cors())

        server.post('/users', jsonBodyParser, (req, res) => {
            try {

                const user = req.body
                const { name, age, email, password } = user

                registerUser(name, age, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof ConflictError) res.status(409)

                        else res.status(500)
                        res.json({ error: error.message })
                    })

            } catch (error) {
                if (error instanceof TypeError || error instanceof RangeError || error instanceof FormatError) res.status(400)
                else res.status(500)
                res.json({ error: error.message })
            }

        })


        server.post('/users/auth', jsonBodyParser, (req, res) => {

            try {
                const credentials = req.body

                const { email, password } = credentials

                authenticateUser(email, password)
                    .then(userId => sign({ sub: userId }, JWT_SECRET, { expiresIn: '1h' }))
                    .then(token => res.status(200).json({ token }))

                    .catch(error => {
                        if (error instanceof MissingError) res.status(404)
                        else if (error instanceof AuthError) res.status(401)
                        else res.status(500)

                        res.json({ error: error.message })
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof RangeError || error instanceof FormatError) res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }

        })


        server.get('/users', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                retrieveUser(userId)

                    .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof MissingError) res.status(404)
                        else res.status(500)

                        res.json({ error: error.message })
                    })

            } catch (error) {
                if (error instanceof TypeError) res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }

        })



        server.delete('/users', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                const { password } = req.body

                unregisterUser(userId, password)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        if (error instanceof MissingError) res.status(404)
                        else if (error instanceof AuthError) res.status(401)
                        else res.status(500)

                        res.json({ error: error.message })
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof RangeError) res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })

            }
        })



        server.patch('/users/updatePassword', jsonBodyParser, (req, res) => {

            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                const credentials = req.body

                const { password, newPassword, newPasswordConfirm } = credentials
                updateUserPassword(userId, password, newPassword, newPasswordConfirm)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        if (error instanceof AuthError) res.status(401)
                    else if (error instanceof MissingError) res.status(404)
                    else res.status(500)

                    res.json({ error: error.message })})

            } catch (error) {

                if (error instanceof TypeError || error instanceof RangeError|| error instanceof ConflictError) res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
                
            }


        })

        server.patch('/users/updateEmail', jsonBodyParser, (req, res) => {
            try {

                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                const credentials = req.body

                const { password, newEmail } = credentials

                updateUserEmail(userId, password, newEmail)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        if (error instanceof AuthError) res.status(401)
                    else if (error instanceof MissingError) res.status(404)
                    else res.status(500)

                    res.json({ error: error.message })})


            } catch (error) {
                if (error instanceof TypeError || error instanceof RangeError|| error instanceof ConflictError|| error instanceof FormatError) res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }


        })
        server.get('/stickies/favs', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                retrieveFavStickies(userId)
                    .then(stickies => res.status(200).json(stickies))
                    .catch(error => res.status(500).json(error.message))

            } catch (error) {
                res.status(500).json(error.message)
            }
        })


        server.post('/stickies', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                const { text, visibility } = req.body
                createSticky(userId, text, visibility)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(500).json(error.message))

            } catch (error) {
                res.status(500).json(error.message)
            }
        })

        server.get('/stickies', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub


                retrievePublicStickies(userId)
                    .then(stickies => res.status(200).json(stickies))
                    .catch(error => res.status(500).json(error.message))
            } catch (error) {
                res.status(500).json(error.message)
            }
        })

        server.get('/stickies/user', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                retrieveMyStickies(userId)
                    .then(stickies => res.status(200).json(stickies))
                    .catch(error => res.status(500).json(error.message))

            } catch (error) {
                res.status(500).json(error.message)
            }
        })


        server.patch('/stickies/:stickyId/text', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                const { stickyId } = req.params
                const { text } = req.body

                updateStickyText(userId, stickyId, text)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(500).json(error.message))
            } catch (error) {
                res.status(500).json(error.message)
            }

        })

        server.patch('/stickies/:stickyId/visibility', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                const { stickyId } = req.params
                const { visibility } = req.body

                updateStickyVisibility(userId, stickyId, visibility)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(500).json(error.message))
            } catch (error) {
                res.status(500).json(error.message)
            }

        })

        server.patch('/stickies/:stickyId/likes', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                const { stickyId } = req.params

                toggleLikeSticky(userId, stickyId)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(500).json(error.message))
            } catch (error) {
                res.status(500).json(error.message)
            }

        })

        server.delete('/stickies/:stickyId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                const { stickyId } = req.params


                deleteSticky(userId, stickyId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(500).json(error.message))
            } catch (error) {
                res.status(500).json(error.message)
            }

        })

        server.patch('/stickies/:stickyId/color', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                const { stickyId } = req.params
                const { color } = req.body

                changeStickyColor(userId, stickyId, color)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(500).json(error.message))
            } catch (error) {
                res.status(500).json(error.message)
            }

        })

        server.patch('/stickies/:stickyId/favs', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const payload = verify(token, JWT_SECRET)

                const userId = payload.sub

                const { stickyId } = req.params

                toggleFavSticky(userId, stickyId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(500).json({ error: error.message }))
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        })



        server.listen(8080, () => console.log('server running on port ' + 8080))
    })










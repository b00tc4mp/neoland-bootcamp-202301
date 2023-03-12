const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { connect, disconnect } = require('mongoose')
const { sign } = require('jsonwebtoken')
const JWT_SECRET = 'juan tiene mucho pelo guapo'
const { FormatError, ExistenceError, AuthError, ValueError, CoherenceError } = require('com')
const verifyToken = require('./utils/verifyToken')
const authenticateUser = require('./logic/authenticateUser')
const registerUser = require('./logic/registerUser')
const retrieveUser = require('./logic/retrieveUser')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        const server = express()
        const jsonBodyParser = bodyParser.json()

        server.use(cors())

        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const credentials = req.body

                const { email, password } = credentials

                authenticateUser(email, password)
                    .then(userId => sign({ sub: userId }, JWT_SECRET, { expiresIn: '1h' }))
                    .then(token => res.status(200).json({ token }))
                    .catch(error => {
                        if (error instanceof ExistenceError)
                            res.status(404)
                        else if (error instanceof AuthError)
                            res.status(401)
                        else
                            res.status(500)

                        res.json({ error: error.message })
                    })
            } catch (error) {
                if (error instanceof FormatError || error instanceof RangeError || error instanceof TypeError)
                    res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }
        })

        server.post('/users', jsonBodyParser, (req, res) => {
            try {
                const user = req.body

                const { email, password, passwordConfirm } = user

                registerUser(email, password, passwordConfirm)
                    .then(token => res.status(201).send())
                    .catch(error => {
                        if (error instanceof CoherenceError)
                            res.status(409)
                        else
                            res.status(500)

                        res.json({ error: error.message })
                    })
            } catch (error) {
                if (error instanceof FormatError || error instanceof RangeError || error instanceof TypeError || error instanceof CoherenceError)
                    res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }
        })

        server.get('/users', (req, res) => {
            try {
                const userId = verifyToken(req)

                return retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof ExistenceError)
                            res.status(404)
                        else
                            res.status(500)

                        res.json({ error: error.message })
                    })
            } catch (error) {
                if (error instanceof TypeError)
                    res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }
        })

        server.listen(8080, () => console.log('server running on port ' + 8080))
    })
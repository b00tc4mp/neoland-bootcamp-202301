const express = require('express') 
const bodyParser = require('body-parser')

const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const unregisterUser = require('./logic/unregisterUser')
const updateUserPassword = require('./logic/updateUserPassword')
const updateUserEmail = require('./logic/updateUserEmail')

const createList = require('./logic/createList')
const deleteList = require('./logic/deleteList')
const retrieveMyLists = require('./logic/retrieveMyLists')
const archiveList = require('./logic/archiveList')
const retrieveArchivedLists = require('./logic/retrieveArchivedLists')

const cors = require("cors")
const { connect, disconnect } = require('mongoose')
const { sign } = require('jsonwebtoken')
const JWT_SECRET = 'juan tiene mucho pelo guapo'
const { FormatError, ExistenceError, AuthError, CoherenceError, ValueError } = require('com')
const verifyToken = require('./utils/verifyToken')


connect('mongodb://127.0.0.1:27017/mylistsdb')
    .then(() => {
        const server = express() 
        const jsonBodyParser = bodyParser.json()

        server.use(cors())

        server.post('/users', jsonBodyParser, (req, res) => { 
            try {
                const user = req.body 

                const { name, age, email, password } = user 

                registerUser(name, age, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof CoherenceError)
                            res.status(409)
                        else
                            res.status(500)

                        res.json({ error: error.message })
                    })
            } catch (error) { 
                if (error instanceof TypeError || error instanceof RangeError || error  instanceof FormatError)
                    res.status(400)
                else
                    res.status(500)
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
                        if (error instanceof ExistenceError)
                            res.status(404)
                        else if (error instanceof AuthError)
                            res.status(401)
                        else
                            res.status(500)

                        res.json({ error: error.message })
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof RangeError || error instanceof FormatError)
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

        server.delete('/users', jsonBodyParser, (req, res) => { 
            try {
                const userId = verifyToken(req)

                const { password } = req.body 
                unregisterUser(userId, password)
                    .then(() => res.status(204).send())
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
                if (error instanceof TypeError || error instanceof RangeError)
                    res.status(400)
                else
                    res.status(500)
                res.json({ error: error.message })
            }
        })

        server.patch('/users/password', jsonBodyParser, (req, res) => { 
            try {
                const userId = verifyToken(req)

                const { password, newPassword, newPasswordConfirm } = req.body

                updateUserPassword(userId, password, newPassword, newPasswordConfirm)
                    .then(() => res.status(204).send())
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
                if (error instanceof CoherenceError || error instanceof TypeError || error instanceof RangeError)
                    res.status(400)
                else
                    res.status(500)
                res.json({ error: error.message })
            }
        })

        server.patch('/users/email', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { newEmail, password } = req.body

                updateUserEmail(userId, newEmail, password)
                    .then(() => res.status(204).send())
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
                if (error instanceof TypeError || error instanceof RangeError || error instanceof FormatError)
                    res.status(400)
                else
                    res.status(500)
                res.json({ error: error.message })
            }
        })


        server.post('/lists', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { title } = req.body

                createList(userId, title)
                    .then(() => res.status(201).send())
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

        server.get('/lists/user', (req, res) => {
            try {
                const userId = verifyToken(req)

                retrieveMyLists(userId)
                    .then(lists => res.status(200).json(lists))
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

        server.delete('/lists/:listId', (req, res) => {
            try {
                const userId = verifyToken(req)

                const { listId } = req.params

                deleteList(userId, listId)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        if (error instanceof ExistenceError)
                            res.status(404)
                        else if (error instanceof CoherenceError)
                            res.status(409)
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
        
        server.patch('/lists/:listId', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { listId } = req.params

                const { archived } = req.body

                archiveList(userId, listId, archived)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        if (error instanceof ExistenceError)
                            res.status(404)
                        else if (error instanceof CoherenceError)
                            res.status(409)   
                        else
                            res.status(500)
                        res.json({ error: error.message })
                    })
            } catch (error) {
                if (error instanceof TypeError )
                    res.status(400)
                else
                    res.status(500)
                res.json({ error: error.message })
            }
        })

        server.get('/lists', (req, res) => {
            try {
                const userId = verifyToken(req)

                retrieveArchivedLists(userId)
                    .then(lists => res.status(200).json(lists))
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

        
        server.listen(8080, () => console.log('server running on port' + 8080))
    })    

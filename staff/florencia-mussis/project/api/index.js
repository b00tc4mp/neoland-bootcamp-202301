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
const updateListArchived = require('./logic/updateListArchived')
const retrieveArchivedLists = require('./logic/retrieveArchivedLists')
const updateListTitle = require('./logic/updateListTitle')
const retrieveList = require('./logic/retrieveList')
const createItem = require('./logic/createItem')
const removeCheckedItemsFromList = require('./logic/removeCheckedItemsFromList')
const toggleAllItemsCheck = require('./logic/toggleAllItemsCheck')

const cors = require("cors")
const { connect, disconnect } = require('mongoose')
const { sign } = require('jsonwebtoken')
const JWT_SECRET = 'juan tiene mucho pelo guapo'
const { FormatError, ExistenceError, AuthError, CoherenceError, ValueError } = require('com')
const verifyToken = require('./utils/verifyToken')
const updateItemCheck = require('./logic/updateItemCheck')
const updateItemText = require('./logic/updateItemText')
const deleteItem = require('./logic/deleteItem')
const updateListShared = require('./logic/updateListShared')
const searchList = require('./logic/searchList')
const shareList = require('./logic/shareList')
const removeSharedFromList = require('./logic/removeSharedFromList')
const updateListSharedMode = require('./logic/updateListSharedMode')


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
                if (error instanceof TypeError || error instanceof RangeError || error instanceof FormatError)
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
                    .then(userId => sign({ sub: userId }, JWT_SECRET, { expiresIn: '2h' }))
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


        server.post('/lists', (req, res) => {
            try {
                const userId = verifyToken(req)

                createList(userId)
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

        server.patch('/lists/:listId/archived', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { listId } = req.params

                const { archived } = req.body

                updateListArchived(userId, listId, archived)
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

        server.get('/lists/archived', (req, res) => {
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

        server.patch('/lists/:listId/title', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { title } = req.body

                const { listId } = req.params

                updateListTitle(userId, listId, title)
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

        server.get('/lists/search', (req, res) => {
            try {
                const userId = verifyToken(req)

                const { q: title } = req.query

                searchList(userId, title)
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

        server.get('/lists/:listId', (req, res) => {
            try {
                const userId = verifyToken(req)

                const { listId } = req.params

                retrieveList(userId, listId)
                    .then(list => res.status(200).json(list))
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


        server.post('/lists/:listId/items', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { listId } = req.params

                const { text, checked } = req.body

                createItem(userId, listId, text, checked)
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

        server.patch('/lists/:listId/items/:itemId/checked', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { checked } = req.body

                const { listId, itemId } = req.params

                updateItemCheck(userId, listId, itemId, checked)
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

        server.patch('/lists/:listId/items/:itemId/text', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { text } = req.body

                const { listId, itemId } = req.params

                updateItemText(userId, listId, itemId, text)
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

        server.delete('/lists/:listId/items/:itemId', (req, res) => {
            try {
                const userId = verifyToken(req)

                const { listId, itemId } = req.params

                deleteItem(userId, listId, itemId)
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

        // server.patch('/lists/:listId/shared', jsonBodyParser, (req, res) => {
        //     try {
        //         const userId = verifyToken(req)

        //         const { listId } = req.params

        //         const { shared } = req.body

        //         updateListShared(userId, listId, shared)
        //             .then(() => res.status(204).send())
        //             .catch(error => {
        //                 if (error instanceof ExistenceError)
        //                     res.status(404)
        //                 else if (error instanceof CoherenceError)
        //                     res.status(409)
        //                 else
        //                     res.status(500)
        //                 res.json({ error: error.message })
        //             })
        //     } catch (error) {
        //         if (error instanceof TypeError)
        //             res.status(400)
        //         else
        //             res.status(500)
        //         res.json({ error: error.message })
        //     }
        // })

        server.delete('/lists/:listId/items/checked/all', (req, res) => {
            try {
                const userId = verifyToken(req)

                const { listId } = req.params

                removeCheckedItemsFromList(userId, listId)
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

        server.patch('/lists/:listId/items/check', (req, res) => {
            try {
                const userId = verifyToken(req)

                const { listId } = req.params

                toggleAllItemsCheck(userId, listId)
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

        server.post('/lists/:listId/share', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { listId } = req.params

                const { email, mode } = req.body

                shareList(userId, listId, email, mode)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        if (error instanceof ExistenceError)
                            res.status(404)
                        else
                            res.status(500)

                        res.json({ error: error.message })
                    })
            } catch (error) {
                if (error instanceof TypeError  || error instanceof ValueError || error instanceof FormatError)
                    res.status(400)
                else
                    res.status(500)
                res.json({ error: error.message })
            }
        })

        server.delete('/lists/:listId/shareds/:sharedId', (req, res) => {
            try {
                const userId = verifyToken(req)

                const { listId, sharedId } = req.params

                removeSharedFromList(userId, listId, sharedId)
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

        server.patch('/lists/:listId/shareds/:sharedId/mode', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { mode } = req.body

                const { listId, sharedId } = req.params

                updateListSharedMode(userId, listId, sharedId, mode)
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
                if (error instanceof TypeError || error instanceof ValueError )
                    res.status(400)
                else
                    res.status(500)
                res.json({ error: error.message })
            }
        })

        server.listen(8080, () => console.log('server running on port' + 8080))
    })    

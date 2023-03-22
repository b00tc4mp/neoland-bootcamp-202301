const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect, disconnect } = require('mongoose')
const { sign } = require('jsonwebtoken');
const JWT_SECRET = 'kepim kepam'
const verifyToken = require('./utils/verifyToken')

const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const unregisterUser = require('./logic/unregisterUser')
const updateUserPassword = require('./logic/updateUserPassword')
const updateUserEmail = require('./logic/updateUserEmail')

const { FormatError, ExistenceError, AuthError, CoherenceError } = require('../../com');

const createAuction = require('./logic/createAuction');
const retrieveAuctions = require('./logic/retrieveAuctions');
const retrieveAuction = require('./logic/retrieveAuction');
const retrieveAuctionBid = require('./logic/retrieveAuctionBid');
const bidAuction = require('./logic/bidAuction')
const retrieveMyAuctions = require('./logic/retrieveMyAuctions')





connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {
        const server = express()
        const jsonBodyParser = bodyParser.json()

        server.use(cors())

        server.post('/users', jsonBodyParser, (req, res) => {
            try {
                const user = req.body

                const { name, age, email, password, creditCard } = user

                registerUser(name, age, email, password, creditCard)
                    .then(() => res.status(201).send())
                    // asincrono
                    .catch(error => {
                        if (error instanceof CoherenceError)
                            res.status(409)
                        else
                            res.status(500)

                        res.json({ error: error.message })
                    })

            } catch (error) {
                // sincrono
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

                retrieveUser(userId)
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
                        else if
                            (error instanceof AuthError)
                            res.status(409)
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

        server.patch('/users/password', jsonBodyParser, (req, res) => { //patch es actualizar
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

        server.post('/auctions', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { title, description, price, photo, bidRate, startDate, endDate } = req.body

                const startDate1 = new Date(startDate)
                const endDate1 = new Date(endDate)

                createAuction(userId, title, description, price, photo, bidRate, startDate1, endDate1)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof ExistenceError)
                            res.status(404)
                        else if (error instanceof TypeError)
                            res.status(400)
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


        server.get('/auctions', (req, res) => {
            try {
                const userId = verifyToken(req)

                retrieveAuctions(userId)
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

        server.get('/auctions/:auctionId', (req, res) => {
            try {
                const userId = verifyToken(req)

                const { auctionId } = req.params

                retrieveAuction(userId, auctionId)
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

        server.get('/auctionBid/:auctionId', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { auctionId } = req.params

                retrieveAuctionBid(auctionId, userId)
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
        server.patch('/auctions/:auctionId/bids', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { auctionId } = req.params
                const { amount } = req.body

                bidAuction(userId, auctionId, amount)
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

        server.get('/myAuctions', (req, res) => {
            try {
                const userId = verifyToken(req)

                retrieveMyAuctions(userId)
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
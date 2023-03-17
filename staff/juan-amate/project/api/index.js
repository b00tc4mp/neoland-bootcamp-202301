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
const updateUserEmail = require('./logic/updateUserEmail')
const updateUserPassword = require('./logic/updateUserPassword')
const updateUserData = require('./logic/updateUserData')
const unregisterUser = require('./logic/unregisterUser')
const createContract = require('./logic/createContract')
const retrieveMyContracts = require('./logic/retrieveMyContracts')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        const server = express()
        const jsonBodyParser = bodyParser.json()

        server.use(cors())

        server.post('/users', jsonBodyParser, (req, res) => {
            try {
                const user = req.body

                const {
                    name,
                    nationalId,
                    role,
                    address,
                    zipCode,
                    city,
                    province,
                    phone,
                    email,
                    password
                } = user

                registerUser(
                    name,
                    nationalId,
                    role,
                    address,
                    zipCode,
                    city,
                    province,
                    phone,
                    email,
                    password
                )
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

                const { password, newPassword, newPasswordRepeat } = req.body

                updateUserPassword(userId, password, newPassword, newPasswordRepeat)
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
                if (error instanceof TypeError || error instanceof RangeError || error instanceof CoherenceError)
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

        server.patch('/users/data', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const { name, nationalId, address, zipCode, city, province, phone } = req.body

                updateUserData(userId, name, nationalId, address, zipCode, city, province, phone)
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
                if (error instanceof TypeError)
                    res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }
        })

        server.post('/contracts', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const {
                    eventDate,
                    ceremonyPlaceDescription,
                    ceremonyPlaceAddress,
                    ceremonyPlaceZipCode,
                    ceremonyPlaceCity,
                    ceremonyPlaceProvince,
                    sessionPlaceDescription,
                    sessionPlaceAddress,
                    sessionPlaceZipCode,
                    sessionPlaceCity,
                    sessionPlaceProvince,
                    celebrationPlaceDescription,
                    celebrationPlaceAddress,
                    celebrationPlaceZipCode,
                    celebrationPlaceCity,
                    celebrationPlaceProvince,
                    preparationPlaceDescription,
                    preparationPlaceAddress,
                    preparationPlaceZipCode,
                    preparationPlaceCity,
                    preparationPlaceProvince,
                    coupleName,
                    coupleId,
                    couplePhone,
                    coupleEmail,
                    couplePreparationPlaceDescription,
                    couplePreparationPlaceAddress,
                    couplePreparationPlaceZipCode,
                    couplePreparationPlaceCity,
                    couplePreparationPlaceProvince,
                    preWeddingServiceSelected,
                    postWeddingServiceSelected,
                    expressDeliveryServiceSelected,
                    extraPhotographerServiceSelected,
                    bookServiceSelected,
                    albumServiceSelected,
                    miniAlbumsServiceSelected,
                    woodBoxAlbumServiceSelected
                } = req.body

                createContract(
                    userId,
                    new Date(),
                    new Date(eventDate),
                    ceremonyPlaceDescription,
                    ceremonyPlaceAddress,
                    ceremonyPlaceZipCode,
                    ceremonyPlaceCity,
                    ceremonyPlaceProvince,
                    sessionPlaceDescription,
                    sessionPlaceAddress,
                    sessionPlaceZipCode,
                    sessionPlaceCity,
                    sessionPlaceProvince,
                    celebrationPlaceDescription,
                    celebrationPlaceAddress,
                    celebrationPlaceZipCode,
                    celebrationPlaceCity,
                    celebrationPlaceProvince,
                    preparationPlaceDescription,
                    preparationPlaceAddress,
                    preparationPlaceZipCode,
                    preparationPlaceCity,
                    preparationPlaceProvince,
                    coupleName,
                    coupleId,
                    couplePhone,
                    coupleEmail,
                    couplePreparationPlaceDescription,
                    couplePreparationPlaceAddress,
                    couplePreparationPlaceZipCode,
                    couplePreparationPlaceCity,
                    couplePreparationPlaceProvince,
                    preWeddingServiceSelected,
                    postWeddingServiceSelected,
                    expressDeliveryServiceSelected,
                    extraPhotographerServiceSelected,
                    bookServiceSelected,
                    albumServiceSelected,
                    miniAlbumsServiceSelected,
                    woodBoxAlbumServiceSelected
                )
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof ExistenceError)
                            res.status(404)
                        else
                            res.status(500)

                        res.json({ error: error.message })
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof ValueError)
                    res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }
        })

        server.get('/contracts', (req, res) => {
            try {
                const userId = verifyToken(req)

                retrieveMyContracts(userId)
                    .then(stickies => res.status(200).json(stickies))
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

        server.listen(8080, () => console.log(`server running on port ${8080}`))
    })


const express = require('express')
const bodyParser = require('body-parser')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const unregisterUser = require('./logic/unregisterUser')
const updateUserPassword = require('./logic/updateUserPassword')
const cors = require("cors")

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
    //  retrieve user
    const userId = req.params.userId //params cuando se lo envio en la ruta, van los ":"

    retrieveUser(userId, (error, user) => {
        if (error) {
            res.status(500).json({ error: error.message })

            return
        }

        res.json(user)
    })
})

server.delete('/users/:userId', jsonBodyParser, (req, res) => {
    //  unregister user
    const userId = req.params.userId

    const { password } = req.body //para extraer la propiedad password de body
    // const password = req.body.password

    unregisterUser(userId, password, error => {
        if (error) {
            res.status(500).json({ error: error.message })

            return
        }
        res.status(204).send() // 204 porque es inmediato 
    })
})


server.patch('/users/:userId', jsonBodyParser, (req, res) => {
    //  update user password

    const userId = req.params.userId

    const credentials = req.body

    const { currentPassword, newPassword, newPasswordRepeat } = credentials

    updateUserPassword(userId, currentPassword, newPassword, newPasswordRepeat, error => {
        if (error) {
            res.status(500).json({ error: error.message })

            return
        }
        res.status(204).send()
    })


})

server.listen(8080,()=>console.log("server running on port "+ 8080))
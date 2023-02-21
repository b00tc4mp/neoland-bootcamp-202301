const express = require('express')
const bodyParser = require('body-parser')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const unregisterUser = require('./logic/unregisterUser')
const updateUserPassword = require('./logic/updateUserPassword')

const server = express()
const jsonBodyParser = bodyParser.json()
// trasnforma la request a json para el servidor
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

    const userId = req.params.userId // params cuando se lo envio a la ruta ()

    retrieveUser(userId, (error, user) => {
        if (error) {
            res.status(500).json({ error: error.message })

            return
        }

        res.status(200).json({ user }) //devolvemos status 200 y el json con los datos del usuario
    })
})

server.delete('/users/:userId', jsonBodyParser ,(req, res) => {
    // TODO unregister user
    // const { params: { userId }} = req
    // const userId = req.params.userId
    const { userId } = req.params
    const { password } = req.body

    unregisterUser(userId, password, error => {
        if (error) {
            res.status(500).json({ error: error.message})

            return
        }

        res.status(204).send() // devolvemos un status 204
    })
})

server.patch('/users/:userId', jsonBodyParser, (req, res) => {
    // TODO update user password
    const { userId } = req.params
    const { currentPassword, newPassword, newPasswordRepeat } = req.body

    updateUserPassword( userId, currentPassword, newPassword, newPasswordRepeat, error => {
        if (error) {
            res.status(500).json({ error: error.message })

            return
        }

        res.status(204).send()
    })
})

server.listen(8080, () => console.log('server running on port '+ 8080))
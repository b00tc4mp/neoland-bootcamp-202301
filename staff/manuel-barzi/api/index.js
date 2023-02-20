const express = require('express')
const bodyParser = require('body-parser')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')

const server = express()
const jsonBodyParser = bodyParser.json()

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

server.get('/users/:userId', jsonBodyParser, (req, res) => {
    // TODO retrieve user
})

server.listen(8080)
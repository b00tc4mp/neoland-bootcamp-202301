const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { connect } = require('mongoose')
const { sign } = require('jsonwebtoken')
const JWT_SECRET = 'juan tiene mucho pelo guapo'

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        const server = express()
        const jsonBodyParser = bodyParser.json()

        server.use(cors())

        server.post('/users', jsonBodyParser, (req, res) => {

        })

        server.listen(8080, () => console.log('server running on port ' + 8080))
    })
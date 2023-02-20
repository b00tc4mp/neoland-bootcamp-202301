const express = require('express')
const bodyParser = require('body-parser')

const server = express()
const jsonBodyParser = bodyParser.json()

server.get('/helloworld', (req, res) => {
    res.send('Hello, World!')
})

server.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name
    const surname = req.params.surname

    //res.header('Content-Type', 'text/plain')
    //res.status(201).send('Hello, ' + name + ' ' + surname +'!')

    //res.header('Content-Type', 'text/html')
    //res.status(201).send('<h1>Hello, ' + name + ' ' + surname +'!</h1>')

    // res.header('Content-Type', 'application/json')
    //res.status(201).send('{ "salutation": "Hello, ' + name + ' ' + surname +'!" }')
    const response = {
        salutation: 'Hello, ' + name + ' ' + surname + '!'
    }
    //const json = JSON.stringify(response)
    //res.status(201).send(json)
    res.status(201).json(response)
})

const users = [
    {
        name: 'John',
        surname: 'Doe',
        age: 34,
        location: 'Alabama'
    },
    {
        name: 'Wendy',
        surname: 'Darling',
        age: 28,
        location: 'Arkansas'
    },
    {
        name: 'Pepito',
        surname: 'Grillo',
        age: 34,
        location: 'Texas'
    },
    {
        name: 'Peter',
        surname: 'Pan',
        age: 38,
        location: 'Ohio'
    },
    {
        name: 'Pepito',
        surname: 'Grillo',
        age: 42,
        location: 'North Carolina'
    }
]

server.get('/search', (req, res) => {
    const name = req.query.name
    const surname = req.query.surname

    const filteredUsers = users.filter(user => user.name === name && user.surname === surname)

    res.json(filteredUsers)
})

server.post('/users', jsonBodyParser, (req, res) => {
    const body = req.body

    res.json(body)
})

server.listen(8080)
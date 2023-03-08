const { connect, disconnect } = require('mongoose')
const { User, Sticky } = require('./models')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        const user = new User({
            name: 'John Doe',
            age: 30,
            email: 'john@doe.com',
            password: '123123123'
        })

        return user.save()
    })
    .then(user => {
        const sticky = new Sticky({
            user: user.id,
            text: 'hola mundo',
            visibility: 'public'
        })

        const sticky2 = new Sticky({
            user: user.id,
            text: 'hello world',
            visibility: 'private'
        })

        return Promise.all([sticky.save(), sticky2.save()])
    })
    .then(() => disconnect())
    .catch(error => console.error(error))
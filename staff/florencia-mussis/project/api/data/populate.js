const { connect, disconnect } = require('mongoose')
const { User, List } = require('./models')


connect('mongodb://127.0.0.1:27017/mylistsdb') 
    .then(() => {
        const user = new User({
            name: 'Florencia Mussis',
            age: 30,
            email: 'florenciamussis@gmail.com',
            password: '123123123'
        })

        return user.save()
    }) .then(user => {
        const list = new List({
            user: user.id,
            title: 'Supermarket',
            items: [ {text:'bread', checked: true}, {text:'wine', checked: false}, {text:'water', checked: true} ]
        })
        const list2 = new List({
            user: user.id,
            title: '30th birthday',
            items: [ {text:'cake', checked: false}, {text:'soda', checked: true} ]
        })

        return Promise.all([list.save(), list2.save()])
    })
    .then(() => disconnect())
    .catch(error => console.error(error))


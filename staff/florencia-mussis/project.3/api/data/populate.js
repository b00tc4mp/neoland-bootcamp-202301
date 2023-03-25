const { connect, disconnect } = require('mongoose')
const { User, List, Item } = require('./models')


connect('mongodb://127.0.0.1:27017/mylistsdb') 
    .then(() => {
        const user = new User({
            name: 'Florencia Mussis',
            age: 30,
            email: 'flor@gmail.com',
            password: '123123123'
        })

        return user.save()
    }) .then(user => {
        const list = new List({
            user: user.id,
            title: 'Supermarket',
            shared: true
        })
        
        const item = new Item({ text: 'bread', checked: true })
        const item2 = new Item({ text: 'wine', checked: false })
        const item3 = new Item({ text: 'water', checked: false })

        list.items.push(item, item2, item3)

        const list2 = new List({
            user: user.id,
            title: '30th birthday',
            shared: false
        })

        const item4 = new Item({ text: 'cake', checked: false })
        const item5 = new Item({ text: 'soda', checked: false })
    
        list2.items.push(item4, item5)


        return Promise.all([list.save(), list2.save()])
    })
    .then(() => disconnect())
    .catch(error => console.error(error))


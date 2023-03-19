const { connect, disconnect } = require('mongoose')
const { User, Auction, Bid , CreditCard } = require('./models')


connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {
        const creditCard = new CreditCard({
            name:'aurelio mazapan',
            number: '4111112111211111',
            cvv: '133',
            expirationDate : new Date (2025-8-20)
        })
        const user = new User({
            role : 'client',
            name: 'aurelio mazapan',
            age: 36,
            email: 'aurelio@mazapan.com',
            password: '123123123',
            creditCard: creditCard
        })


        const auction = new Auction({
            title: 'coche',
            description: 'coche guapò',
            price: 1000,
            photo: 'https://motor.elpais.com/wp-content/uploads/2019/09/0506d357-bugatti-chiron-super-sport-300-2-1440x740.jpg',
            bidRate: 5,
            startDate: new Date(),
            endDate: new Date()
        })
        return Promise.all([
            user.save(),
            auction.save()
        ])
    })
    .then(([user, auction]) => {
        const bid = new Bid({
            auction: auction.id,
            user: user.id,
            amount: 5,
            date: new Date()

        })

        return bid.save()
    })
    .then(() => {

    })

    .then(() => disconnect())
    .catch(error => console.error(error))
const { Schema, model, Types: { ObjectId } } = require('mongoose')

const creditCard = new Schema({
    number: {
        type: 'string',
        required: true,
        length: 16,
        unique: true
    },
    cvv: {
        type: 'string',
        required: true,
        length: 3,
        unique: true

    },
    expirationDate: {
        type: Date,
        required: true,
        u
    }
})

const user = new Schema({
    name: {
        type: 'string',
        required: true
    },
    age: {
        type: 'number',
        required: true

    },
    email: {
        type: 'string',
        required: true,
        unique: true

    },
    password: {
        type: 'string',
        required: true,

    },
    creditCard: creditCard
})

const auction = new Schema({
    name: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    price: {
        type: 'number',
        required: true
    },
    photo: {
        type: 'string',
        optional: true
    },
    bidRate: {
        type: 'number',
        required: true,
    },
    startDate: {
        type: 'date',
        required: true
    },
    endDate: {
        type: 'date',
        required: true
    }
})

const bid = new Schema({
    auction: {
        type: ObjectId,
        required: true

    },
    user: {
        type: ObjectId,
        required: true
    },
    amount: {
        type: 'number',
        required: true
    },
    date: {
        type: 'date',
        required: true
    }
})


const User = model('User', user)
const Auction = model('Auction', auction)
const Bid = model('Bid', bid)
const CreditCard = model('CreditCard', creditCard)  


module.exports = {
    User,
    Auction,
    Bid,
    CreditCard

}


const { Schema, model, Types: { ObjectId } } = require('mongoose')

const creditCard = new Schema({
    name: {
        type: 'string',
        required: true,

    },
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

    }
})

const user = new Schema({
    role: {
        type: 'string',
        enum: ['client', 'admin'],
        required: true
    },
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
    title: {
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
        required: true,
        ref: 'Auction'
    },
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
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


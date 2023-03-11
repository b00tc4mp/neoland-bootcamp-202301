const { Schema, model, Types: { ObjectId } } = require('mongoose')

const user = new Schema({
    businessName: {
        type: 'string',
        required: true
    },
    nif: {
        type: 'string',
        required: true
    },
    address: {
        type: 'string',
        required: true
    },
    zipCode: {
        type: 'number',
        required: true
    },
    city: {
        type: 'string',
        required: true
    },
    region: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true
    },
    phone: {
        type: 'number',
        required: true
    }
})

const client = new Schema({
    name: {
        type: 'string',
        required: true
    },
    surname: {
        type: 'string',
        required: true
    },
    phone: {
        type: 'number',
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    nif: {
        type: 'string',
        required: true
    },
    address: {
        type: 'string',
        required: true
    },
    zipCode: {
        type: 'number',
        required: true
    },
    city: {
        type: 'string',
        required: true
    },
    region: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    eventDate: {
        type: 'date',
        required: true
    },
    ceremony: {
        type: 'string',
        required: true
    },
    ceremonyHour: {
        type: 'date',
        required: true
    },
    sessionPlace: {
        type: 'string',
        required: false
    },
    celebration: {
        type: 'string',
        required: true
    },
    gettingReadyAddress: {
        type: 'string',
        required: true
    },
    gettingReadyCity: {
        type: 'string',
        required: true
    },
    coupleName: {
        type: 'string',
        required: true
    },
    coupleSurname: {
        type: 'string',
        required: true
    },
    couplePhone: {
        type: 'number',
        required: true
    },
    coupleEmail: {
        type: 'string',
        required: true,
        unique: true
    },
    coupleNif: {
        type: 'string',
        required: true
    },
    coupleGettingReadyAddress: {
        type: 'string',
        required: true
    },
    coupleGettingReadyCity: {
        type: 'string',
        required: true
    }
})

const User = model('User', user)
const Client = model('Client', client)

module.exports = {
    User,
    Client
}
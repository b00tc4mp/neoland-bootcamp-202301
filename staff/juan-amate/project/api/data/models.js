const { Schema, model, Types: { ObjectId } } = require('mongoose')

const user = new Schema({
    name: {
        type: 'string',
        required: true
    },
    nationalId: {
        type: 'string',
        required: true
    },
    role: {
        type: 'string',
        enum: ['admin', 'client'],
        required: true
    },
    address: {
        type: 'string',
        required: true
    },
    zipCode: {
        type: 'string',
        required: true
    },
    city: {
        type: 'string',
        required: true
    },
    province: {
        type: 'string',
        required: true
    },
    phone: {
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
    }
})

const place = new Schema({

    description: {
        type: 'string',
        required: true
    },
    address: {
        type: 'string',
        required: false
    },
    zipCode: {
        type: 'string',
        required: false
    },
    city: {
        type: 'string',
        required: true
    },
    province: {
        type: 'string',
        required: false
    }
})

const contract = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
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
    eventDate: {
        type: Date,
        required: true
    },
    ceremonyPlace: {
        type: place,
        required: true
    },
    sessionPlace: {
        type: place,
        required: false
    },
    celebrationPlace: {
        type: place,
        required: false
    },
    preparationPlace: {
        type: place,
        required: false
    },
    coupleName: {
        type: 'string',
        required: true
    },
    coupleId: {
        type: 'string',
        required: true
    },
    couplePhone: {
        type: 'string',
        required: true
    },
    coupleEmail: {
        type: 'string',
        required: true,
        unique: true
    },
    couplePreparationPlace: {
        type: place,
        required: true
    },
    signed: {
        type: 'boolean',
        required: true,
        default: false
    }
})

const User = model('User', user)
const Contract = model('Contract', contract)
const Place = model('Place', place)

module.exports = {
    User,
    Contract,
    Place
}
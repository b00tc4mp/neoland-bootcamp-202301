const { Schema, model, Types: { ObjectId } } = require('mongoose')

const user = new Schema({
    name: {
        type: 'string',
        required: true
    },
    age: {
        type: 'number',
        required: true
        // TODO validate age is greater than or equal to 18
    },
    email: {
        type: 'string',
        required: true,
        unique: true
        // TODO validate email has a correct format
    },
    password: {
        type: 'string',
        required: true,
        // TODO validate password is greater than or equal to 8 characters
    }
})

const sticky = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    text: {
        type: 'string',
        default: ''
    },
    visibility: {
        type: 'string',
        enum: ['public', 'private']
    },
    likes: [{
        type: ObjectId,
        ref: 'User'

    }],

    color: {
        type: "string",
        enum: ["red", "green", "blue", "yellow", "orange", "purple"],
        default: "yellow"

    }


})

const User = model('User', user)
const Sticky = model('Sticky', sticky)

module.exports = {
    User,
    Sticky
}



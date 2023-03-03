const { Schema, model, Types: { ObjectId} } =  require('mongoose')

const user = new Schema({
    name: {
        type: 'string',
        required: true
    },
    age: {
        type:'number',
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
    }
})

const sticky = new Schema({
    user: {
        type: ObjectId,
        ref: 'User' //la propiedad se refiere a la coleccion de usuarios
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
    }]
})

const User = model('User', user)
const Sticky = model('Sticky', sticky)

module.exports ={
    User,
    Sticky
}
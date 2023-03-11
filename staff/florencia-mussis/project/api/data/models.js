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

const list = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    title: {
        type: 'string',
        default: ''
    },
    items: [{
        text: {
            type: 'string',
            default: ''
        },
        checked: {
            type: 'boolean',
            default: false
        },  
    }],
    archived: {
        type: 'boolean',
        default: false,
    }
})

const User = model('User', user)
const List = model('List', list)

module.exports ={
    User,
    List
}
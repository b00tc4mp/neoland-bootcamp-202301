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

const item = new Schema({
    text: {
        type: 'string',
        default: '',
        required: true
    },
    checked: {
        type: 'boolean',
        default: false,
        required: true
    },  
})

const list = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: 'string',
        default: 'New list',
    },
    items: [item],
    archived: {
        type: 'boolean',
        default: false,
        required: true
    },
    shared: {
        type: 'boolean',
        default: false,
        required: true
    },
})

const User = model('User', user)
const List = model('List', list)
const Item = model('Item', item)

module.exports ={
    User,
    List,
    Item
}
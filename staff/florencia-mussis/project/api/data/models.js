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
        required: false
    },
    checked: {
        type: 'boolean',
        default: false,
        required: true
    },  
})

const shared = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    mode: {
        type: 'string',
        enum: ['viewer', 'editor'],
        default: 'viewer',
        required: true
    }
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
    shareds: [shared],
})

const User = model('User', user)
const List = model('List', list)
const Item = model('Item', item)
const Shared = model('Shared', shared)

module.exports ={
    User,
    List,
    Item,
    Shared
}
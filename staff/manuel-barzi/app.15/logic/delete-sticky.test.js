// case 0

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

stickies.length = 0
var sticky = {
    id: createStickyId(),
    user: 'pepito@grillo.com',
    text: 'hola mundo',
    visibility: 'private'
}
stickies.push(sticky)
var stickyId = stickies[0].id

deleteSticky('pepito@grillo.com', stickyId)
verify(stickies.length === 0)

// case 1

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

stickies.length = 0
var sticky = {
    id: createStickyId(),
    user: 'pepito@grillo.com',
    text: 'hola mundo',
    visibility: 'private'
}
stickies.push(sticky)
var stickyId = stickies[0].id

try {
    deleteSticky('pepito@grill.com', stickyId)
} catch(error) {
    verify(error.message === 'user with email pepito@grill.com not found')
}

// case 2

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

stickies.length = 0
var sticky = {
    id: createStickyId(),
    user: 'pepito@grillo.com',
    text: 'hola mundo',
    visibility: 'private'
}
stickies.push(sticky)
var stickyId = 'sticky-1000'

try {
    deleteSticky('pepito@grillo.com', stickyId)
} catch(error) {
    verify(error.message === 'sticky with id ' + stickyId + ' not found')
}

// case 3

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

stickies.length = 0
var sticky = {
    id: createStickyId(),
    user: 'peter@pan.com',
    text: 'hola mundo',
    visibility: 'private'
}
stickies.push(sticky)
var stickyId = stickies[0].id

try {
    deleteSticky('pepito@grillo.com', stickyId)
} catch(error) {
    verify(error.message === 'sticky with id ' + stickyId + ' does not belong to user with email pepito@grillo.com')
}
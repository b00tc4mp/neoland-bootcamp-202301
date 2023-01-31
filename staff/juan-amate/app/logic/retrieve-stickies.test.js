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

retrieveStickies()

verify(stickies.length === 1)

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

var sticky = {
    id: createStickyId(),
    user: 'wendy@darling.com',
    text: 'hello world',
    visibility: 'public'
}
stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: 'peter@pan.com',
    text: 'hello world',
    visibility: 'private'
}
stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: 'peter@pan.com',
    text: 'hello world',
    visibility: 'public'
}
stickies.push(sticky)

verify(stickies.length === 4)
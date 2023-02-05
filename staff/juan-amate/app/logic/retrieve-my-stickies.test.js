// case 0
users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)
stickies.length=0
var sticky = {
    id : createStickyId(),
    text: 'hola mundo',
    visibility: 'private',
    user: 'pepito@grillo.com'
}
stickies.push(sticky)
var sticky = {
    id : createStickyId(),
    text: 'hola mundo',
    visibility: 'public',
    user: 'pepito@grillo.com'
}
stickies.push(sticky)
var sticky = {
    id: createStickyId(),
    text: 'hello world',
    visibility: 'public',
    user: 'wendy@darling.com'
}
stickies.push(sticky)
var sticky = {
    id: createStickyId(),
    text: 'hello world',
    visibility: 'public',
    user: 'peter@pan.com'
}
stickies.push(sticky)
var results = retrieveMyStickies('pepito@grillo.com')
verify(results.length === 2)

//case 1 email wrong email

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

stickies.length=0
var sticky = {
    id : createStickyId(),
    text: 'hola mundo',
    visibility: 'private',
    user: 'pepito@grillo.com'
}
stickies.push(sticky)
var sticky = {
    id : createStickyId(),
    text: 'hola mundo',
    visibility: 'public',
    user: 'pepito@grillo.com'
}
stickies.push(sticky)
var sticky = {
    id: createStickyId(),
    text: 'hello world',
    visibility: 'public',
    user: 'wendy@darling.com'
}
stickies.push(sticky)
var sticky = {
    id: createStickyId(),
    text: 'hello world',
    visibility: 'public',
    user: 'peter@pan.com'
}
stickies.push(sticky)

try {
   retrieveMyStickies('pepit@grillo.com')
} catch (error) {
    verify(error.message === 'user with email pepit@grillo.com not found')
    verify(results.length === 2)
}
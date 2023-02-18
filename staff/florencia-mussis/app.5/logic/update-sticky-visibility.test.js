// case 0 Todo es correcto y podemos modificar la visibility del sticky

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
var stickyId = stickies[0].id // 'sticky-0'

updateStickyVisibility('pepito@grillo.com', stickyId, 'public')

verify(stickies[0].visibility === 'public')
verify(stickies.length === 1)

// case 1 El email es incorrecto

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
var stickyId = stickies[0].id // 'sticky-0'

try {
    updateStickyVisibility('pepito@grill.com', stickyId, 'public')
} catch (error) {
    verify(error.message === 'User with email pepito@grill.com not found')
}


// case 2 No encontro el sticky

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
    updateStickyVisibility('pepito@grillo.com', stickyId, 'public')
} catch (error) {
    verify(error.message === 'Sticky with id ' + stickyId + ' not found')
}

// case 3 El sticky no corresponde al usuario que lo quiere borrar

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

var user = {
    name: 'Wendy Darling',
    age: 18,
    email: 'wendy@darling.com',
    password: '123123123'
}
users.push(user)

stickies.length = 0
var sticky = {
    id: createStickyId(),
    user: 'wendy@darling.com',
    text: 'hello world',
    visibility: 'public'
}
stickies.push(sticky)
var stickyId = stickies[0].id

try {
    updateStickyVisibility('pepito@grillo.com', stickyId, 'public')
} catch (error) {
    verify(error.message === 'Sticky with id ' + stickyId + ' does not belong to user with email pepito@grillo.com')
}



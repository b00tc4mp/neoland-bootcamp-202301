// case 0 - happy

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

updateStickyVisibility('pepito@grillo.com', stickyId, 'public')

verify(stickies[0].visibility === 'public')

// case 1 - error de usuario

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
    verify(error.message === 'user with email pepito@grill.com not found')
}

// case 2 - el sticky no corresponde al usuario

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
    user: 'wendy@darling.com',
    text: 'hello world',
    visibility: 'public'
}
stickies.push(sticky)
var stickyId = stickies[0].id

try {
    updateStickyVisibility('pepito@grillo.com', stickyId, 'public')
} catch (error) {
    verify(error.message === 'sticky with id ' + stickyId + ' does not belong to user with email pepito@grillo.com')
}

// case 3 - no encontramos el sticky

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
    id: 'sticky-1',
    user: 'pepito@grillo.com',
    text: 'hola mundo',
    visibility: 'private'
}
stickies.push(sticky)

try {
    updateStickyVisibility('pepito@grillo.com', 'sticky-1000', 'public')
} catch (error) {
    verify(error.message === 'sticky with id sticky-1000 not found')
}

// case 4 - la visibilidad actual y la nueva, coinciden

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
    visibility: 'public'
}
stickies.push(sticky)
var stickyId = createStickyId()

try {
    updateStickyVisibility('pepito@grillo.com', stickyId, 'public')
} catch (error) {
    verify(error.message === 'sticky visibility with id ' + stickyId + ' wrong')
}
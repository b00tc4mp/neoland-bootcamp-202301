// //case 0 -> Happy path
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

updateStickyVisibility('pepito@grillo.com', stickyId,'private')

verify(stickies[0].visibility === 'private')
verify(stickies.length === 1)


// case 1 -> User not found
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
    updateStickyVisibility('pepito@grill.com', stickyId, 'private')
} catch (error) {
    verify(error.message === 'user with email pepito@grill.com not found')
}


// case 2 -> Sticky not found
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
    updateStickyVisibility('pepito@grillo.com', stickyId, 'private')
} catch (error) {
    verify(error.message === 'sticky with id ' + stickyId + ' does not belong to user with email pepito@grillo.com')
}



// case 3 -> Sticky does not belong to the user

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
var stickyId = createStickyId()

try {
    updateStickyVisibility('pepito@grillo.com', stickyId, 'private')
} catch (error) {
    verify(error.message === 'sticky with id ' + stickyId + ' not found')
}
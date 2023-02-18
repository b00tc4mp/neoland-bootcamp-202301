// case 0 un usuario le pone like a otro sticky de otro usuario

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
    text: 'hello world',
    visibility: 'public',
    user: 'wendy@darling.com',
    likes: []
}
stickies.push(sticky)

var stickyId = stickies[0].id

toggleLikeSticky("pepito@grillo.com", stickyId)

verify(stickies[0].likes.includes("pepito@grillo.com")) //agrega el mail al array de like


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
    text: 'hello world',
    visibility: 'public',
    user: 'wendy@darling.com',
    likes: ["pepito@grillo.com"]
}

stickies.push(sticky)

var stickyId = stickies[0].id

toggleLikeSticky("pepito@grillo.com", stickyId)

verify(!stickies[0].likes.includes("pepito@grillo.com")) //quita el email del array de likes (saca el like)


//case 2 mail no es correcto, en q caso?

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
    text: 'hello world',
    visibility: 'public',
    user: 'wendy@darling.com',
    likes: []
}

stickies.push(sticky)

var stickyId = stickies[0].id

try {
    toggleLikeSticky("pepito@grill.com", stickyId)
} catch (error) {
    verify(error.message === "user with email pepito@grill.com not found")
}

// case 3 el stickyid no corresponde a un sticky creado

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
    text: 'hello world',
    visibility: 'public',
    user: 'wendy@darling.com',
    likes: []
}
stickies.push(sticky)

var stickyId = "wrong-sticky-1000"

try {
    toggleLikeSticky("pepito@grillo.com", stickyId)
} catch (error) {
    debugger
    verify (error.message === "sticky with id " + stickyId + " not found")
}


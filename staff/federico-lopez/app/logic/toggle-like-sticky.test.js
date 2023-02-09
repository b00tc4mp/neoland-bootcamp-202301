// caso 0

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
    text: 'hola mundo',
    visibility: 'public',
    likes: []
}

stickies.push(sticky)

var stickyId = stickies[0].id

toggleLikeSticky('pepito@grillo.com', stickyId)
verify(stickies[0].likes.includes('pepito@grillo.com'))

// caso 1

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
    text: 'hola mundo',
    visibility: 'public',
    likes: ['pepito@grillo.com']
}

stickies.push(sticky)

var stickyId = stickies[0].id

toggleLikeSticky('pepito@grillo.com', stickyId)
verify(!stickies[0].likes.includes('pepito@grillo.com'))

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
    user: 'wendy@darling.com',
    text: 'hola mundo',
    visibility: 'public',
    likes: ['pepito@grillo.com']
}

stickies.push(sticky)

var stickyId = stickies[0].id

try {
    toggleLikeSticky('pepito@grill.com', stickyId)
} catch(error) {
    verify(error.message === 'user with email pepito@grill.com not found')
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
    user: 'wendy@darling.com',
    text: 'hola mundo',
    visibility: 'public',
    likes: ['pepito@grillo.com']
}

stickies.push(sticky)

var stickyId = createStickyId()

try {
    toggleLikeSticky('pepito@grillo.com', stickyId)
} catch(error) {
    verify(error.message === 'sticky with id ' + stickyId + ' not found')
}
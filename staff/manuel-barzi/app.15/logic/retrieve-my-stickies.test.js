// case 0

users.length = 0

var user = {
    name: 'Peter Pan',
    age: 35,
    email: 'peter@pan.com',
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

var results = retrieveMyStickies('peter@pan.com')
verify(results.length === 2)

// case 1

users.length = 0

var user = {
    name: 'Peter Pan',
    age: 35,
    email: 'peter@pan.com',
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

try {
    var results = retrieveMyStickies('peter@pa.com')
} catch(error) {
    verify(error.message === 'user with email peter@pa.com not found')
}
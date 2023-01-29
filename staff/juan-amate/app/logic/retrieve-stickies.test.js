// case 0

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

var results = retrieveStickies()
// console.log(results)
verify(results.length === 4)
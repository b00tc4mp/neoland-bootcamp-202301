// case 0

stickies.length=0
var sticky = {
    id : createStickyId(),
    text: 'hola mundo',
    visibility: 'private',
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

var results = updateStickyVisibility()

verify( results.length === 1)
    // case 0

stickies.length=0
var sticky = {
    id : createStickyId(),
    text: 'hola mundo',
    visibility: 'private',
    user: 'pepito@grillo.com'
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    text: 'hello world',
    visibility: 'private',
    user: 'wendy@darling.com'
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    text: 'hello world',
    visibility: 'private',
    user: 'peter@pan.com'
}

stickies.push(sticky)

var results = updateStickyVisibility()

verify( results.length === 3)
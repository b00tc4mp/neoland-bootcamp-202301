// database


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
var results = retrievePublicStickies()

verify(results.length === 2)
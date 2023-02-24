import stickies from './stickies'
import createStickyId from './helpers/create-sticky-id'

var sticky = {
    id: createStickyId(),
    user: 'user-1676970622765',
    text: 'hola mundo',
    visibility: 'private',
    likes: []
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: 'user-1676975539753',
    text: 'hello world',
    visibility: 'public',
    likes: []
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: 'user-1676970622765',
    text: 'hello world',
    visibility: 'public',
    likes: []
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: 'user-1676970622765',
    text: 'hello world',
    visibility: 'public',
    likes: []
}

stickies.push(sticky)
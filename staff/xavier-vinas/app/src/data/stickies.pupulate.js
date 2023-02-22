import stickies from "./stickies"
import createStickyId from "./helpers/create-sticky-id"

var sticky = {
    id: createStickyId(),
    user: 'user-1676988978003',
    text: 'hola mundo',
    visibility: 'private',
    likes: []
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: 'user-1676980509816',
    text: 'hello world',
    visibility: 'public',
    likes: []
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: 'user-1676988978003',
    text: 'hello world',
    visibility: 'public',
    likes: []
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: 'user-1676988978003',
    text: 'hello world',
    visibility: 'public',
    likes: []
}

stickies.push(sticky)

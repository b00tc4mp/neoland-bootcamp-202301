import stickies from "./stickies"
import createStickyId from "./helpers/create-sticky-id"

var sticky = {
    id : createStickyId(),
    text: 'hola mundo',
    visibility: 'private',
    user: 'user-1676992518546',
    likes: []
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    text: 'hello world',
    visibility: 'public',
    user: 'user-1676968593738',
    likes: []
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    text: 'hello world',
    visibility: 'public',
    user: 'user-1676992518546',
    likes: []
}

stickies.push(sticky)

// console.log(stickies)

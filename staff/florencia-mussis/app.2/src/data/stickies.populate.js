import stickies from "./stickies"
import createStickyId from "./helpers/create-sticky-id"

var sticky = {
    id: createStickyId(),
    user: "user-1676904646029",
    text: 'hello world',
    visibility: 'private',
    likes: []
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: 'user-1676988822365',
    text: 'hello world',
    visibility: 'public',
    likes: []
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: 'user-1676988822365',
    text: 'hello world',
    visibility: 'public',  
    likes: []
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: "user-1676904646029",
    text: "hello word",
    visibility: "public",
    likes: []
}

stickies.push(sticky)


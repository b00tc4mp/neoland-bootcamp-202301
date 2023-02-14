// case 0 

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

verify(stickies[0].likes.includes("pepito@grillo.com"))


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

verify(!stickies[0].likes.includes("pepito@grillo.com"))


//case 2 mail no es correcto 
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

// case 3 el sticky no corresponde 

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
    verify (error.message === "sticky with id "+ stickyId +" not found")
}





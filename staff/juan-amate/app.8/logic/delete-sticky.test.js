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
    user: 'pepito@grillo.com',
    text: 'hola mundo',
    visibility: 'public'
}
stickies.push(sticky)
var stickyId = stickies[0].id;

deleteSticky(email, stickyId);

verify(stickies.length === 0);

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
  user: 'pepito@grillo.com',
  text: 'hello world',
  visibility: 'public'
}
stickies.push(sticky)
var stickyId = 'sticky-1000'
var email = stickies[0].user;
var previousLength = stickies.length;

try {
  deleteSticky(email, stickyId);
  verify(stickies[0].id !== stickyId);
} catch (error) {
  verify(error.message === "sticky with id 'sticky-1000' not found");
}

// case 2

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

var stickyId = stickies[0].id;

try {
  deleteSticky("wrong@email.com", stickyId);
} catch (error) {
  verify(error.message === "user with email 'wrong@email.com' not found");
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
var user = {
    name: 'Wendy Darling',
    age: 18,
    email: 'wendy@darling.com',
    password: '123123123'
}
users.push(user)
stickies.length = 0
var sticky = {
    id: createStickyId(),
    user: 'wendy@darling.com',
    text: 'hello world',
    visibility: 'public'
}
stickies.push(sticky)

var stickyId = stickies[0].id

try {
  deleteSticky('pepito@grillo.com', stickyId);
} catch (error) {
  verify(error.message === "sticky with id " + stickyId + " does not belong to user with email pepito@grillo.com");
}





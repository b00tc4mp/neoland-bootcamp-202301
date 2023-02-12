// case 0
user.length = 0
var user = {
  name: "pepito Grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123"
}
users.push(user)

stickies.length = 0
var sticky = {
  id: createStickyId(),
  user: "pepito@grillo.com",
  text: "hola mundo!",
  visibility: "private",
}
stickies.push(sticky)
var stickyId = stickies[0].id

updateStickyText('pepito@grillo.com', stickyId, 'hello world')

// expected ouput: [{...}, { id: 'sticky-1', user: 'wendy@darling.com', text: 'this is the new text'}, ...]
verify(stickies[0].text === 'hello world')
verify(stickies.length === 1)


// case 1 -> User not found
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
    visibility: 'private'
}
stickies.push(sticky)
var stickyId = stickies[0].id // 'sticky-0'

try {
    updateStickyText('pepito@grill.com', stickyId, 'hello world')
} catch (error) {
    verify(error.message === 'user with email pepito@grill.com not found')
}

// case 2 -> Sticky not found
users.lenght = 0
var user = {
  name: "pepito Grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123"
}
users.push(user)
var user = {
  name: "Wendy Darling",
  age: 18,
  email: "wendy@darling.com",
  password: "123123123"
}
users.push(user)
stickies.length = 0
var sticky = {
  id: createStickyId(),
  user: "wendy@Darling.com",
  text: "hello world!",
  visibility: "public",
}
stickies.push(sticky)
var stickyId = stickies[0].id

try {
  updateStickyText('pepito@grillo.com', stickyId, 'hola mundo')
  console.log(stickies[1]);
} catch (error) {
  // expected output: 'sticky with id wrong-id not found')
verify(error.message === 'sticky with id sticky-1 does not belong to user with email pepito@grillo.com')
}

// case 3 -> Sticky does not belong to the user
user.length = 0 
var user = {
  name: "pepito Grillo",
  age: 50,
  email: "pepito@grillo.com",
  password: "123123123"
}
users.push(user)
stickies.length = 0
var sticky = {
  id: createStickyId(),
  user: "pepito@grillo.com",
  text: "hola mundo!",
  visibility: "private",
}
stickies.push(sticky)
var stickyId = createStickyId()
try {
  updateStickyText('pepito@grillo.com', stickyId, 'hola mundo')
  console.log(stickies[100])
} catch (error) {
  // expected output: 'sticky with id sticky-1 does not belong to user with email pepito@grillo.com'
verify(error.message === 'sticky with id ' + stickyId + ' not found')
}
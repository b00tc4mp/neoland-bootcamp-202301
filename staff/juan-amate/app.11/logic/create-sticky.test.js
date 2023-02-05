// case 0

users.length = 0
var user = {
  name: 'Peter Pan',
  age: 21,
  email: 'peter@pan.com',
  password: '123123123'
}
users.push(user)
stickies.length = 0

createSticky('peter@pan.com', 'hello wendy', 'public')
verify(stickies.length === 1)

// case 1

users.length = 0
var user = {
  name: 'Peter Pan',
  age: 21,
  email: 'peter@pan.com',
  password: '123123123'
}
users.push(user)
stickies.length = 0

try {
  createSticky('peter@pan2.com', 'hello wendy', 'public')
} catch (error) {
  verify(error.message = 'user with email peter@pan2.com not found')
  verify(stickies.length === 0)
}
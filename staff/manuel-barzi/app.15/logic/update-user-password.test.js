// case 0

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

updateUserPassword('pepito@grillo.com', '123123123', '234234234', '234234234')
verify(users[0].password === '234234234')

// caso 1

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

try {
    updateUserPassword('pepito@grill.com', '123123123', '234234234', '234234234')
} catch (error) {
    verify(error.message === 'user with email pepito@grill.com not found')
}

// caso 2

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

try {
    updateUserPassword('pepito@grillo.com', '123123123_', '234234234', '234234234')
} catch (error) {
    verify(error.message === 'wrong credentials')
}

// caso 3

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

try {
    updateUserPassword('pepito@grillo.com', '123123123', '234234234_', '234234234')
} catch (error) {
    verify(error.message === 'new password does not match the confirmation password')
}

// caso 4

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

try {
    updateUserPassword('pepito@grillo.com', '123123123', '123123123', '123123123')
} catch (error) {
    verify(error.message === 'new password is equal to current password')
}

// caso 5

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

try {
    updateUserPassword('pepito@grillo.com', '123123123', '234', '234')
} catch (error) {
    verify(error.message === 'new password length is lower than 8 characters')
}

// caso 6

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

try {
    updateUserPassword('pepito@grillo.com', '123123123', '        ', '        ')
} catch (error) {
    verify(error.message === 'new password contains space characters')
}

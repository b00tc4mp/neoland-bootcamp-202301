//case 0 
//the user who wants to change the password is the owner
users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

updateUserPassword('pepito@grillo.com','123123123', '234234234', '234234234')
verify(users[0].password === 234234234)

//case 1 
//The user email does not match with the current password
users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

try {
    updateUserPassword('pepito@grillo2.com', '123123123', '234234234', '234234234')
}catch(error){
verify(error.message === 'user with the email pepito@grillo2.com not found')
}

//case 2 The user new password is incorrect

users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

try {
    updateUserPassword('pepito@grillo.com', '123123123', '234234234', '234234234')
}catch(error){
verify(error.message === 'wrong credentials')
}

//case 3 the confirmpassword does not match with the new password
users.length = 0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}
users.push(user)

try {
    updateUserPassword('pepito@grillo.com', '123123123', '432432435', '234234232')
}catch(error){
verify(error.message === 'the new password does not match with the confirmation password')
}

//case 4
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
}catch(error){
verify(error.message === 'the new password is exactly the same than the old one')
}

//case 5

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
}catch(error){
verify(error.message === 'new password length is lower than 8 characters')
}

//case 6
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
}catch(error){
verify(error.message === 'new password has spaces on it')
}


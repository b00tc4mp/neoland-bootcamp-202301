// case 0  Happy path 

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


// case 1 Error en el correo del usuario, no lo puede encontrar

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
    verify(error.message === 'User with email pepito@grill.com not found')
}

// case 2 pongo mal la contraseña actual

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
    verify(error.message === 'Wrong credentials')
}

// case 3 no coinciden las nuevas contraseñas

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
    verify(error.message === 'New password does not match the confirmation password')
}


// case 4 la nueva contraseña es igual a la que estaba

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
    verify(error.message === 'New password is equal to current password')
}

// case 5 la nueva contraseña contiene menos de 8 caracteres

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
    verify(error.message === 'New password length is lower than 8 characters')
}


// case 6 la nueva contraseña contiene uno o mas espacios vacios


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
    verify(error.message === 'New password contains space characters')
}

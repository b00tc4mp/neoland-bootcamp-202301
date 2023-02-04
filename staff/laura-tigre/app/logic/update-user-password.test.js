//case 0 happy path
users.length=0
var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)

updateUserPassword('pepito@grillo.com','123123123','234234234','234234234')
verify(users[0].password === '234234234')


//caso 1 user.email no es igual email

users.length= 0

var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)
try {
    updateUserPassword('pepit@grillo.com','123123123','234234234','234234234')
 
} catch (error) {
    verify(error.message === 'user with email pepit@grillo.com not found')
}


// case 2 User password does not belong to user email

users.length= 0

var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)

try {
    updateUserPassword('pepito@grillo.com','12312323','234234234','234234234')
 
} catch (error) {

    verify(error.message === 'wrong credentials')
    
}

//case 3 new password is not the new password confirm
users.length = 0

var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)

try {
    updateUserPassword('pepito@grillo.com','123123123','234234234_','234234234')
 
} catch (error) {
    
    verify( error.message === 'new password does not match the confirmation')
}


//case 4 current password is not the same new password

users.length = 0

var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)
try {
    updateUserPassword('pepito@grillo.com','123123123','123123123','123123123')
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
    updateUserPassword('pepito@grillo.com','123123123','234','234')
} catch (error) {
    verify(error.message === 'new password length is lower than 8 characters') 
}

// caso 6 cuando queremos poner espacios vacios
users.length = 0

var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)
try {
    updateUserPassword('pepito@grillo.com','123123123','        ','        ')
} catch (error) {
    verify(error.message === 'new password conteins space characters') 
}
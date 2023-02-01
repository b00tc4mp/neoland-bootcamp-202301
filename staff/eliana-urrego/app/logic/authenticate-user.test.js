// case 0
users.length = 0
var user = {
    name: "pepito Grillo",
    age: 50,
    email: "pepito@grillo.com",
    password: "123123123"
}
users.push(user)

authenticateUser('pepito@grillo.com', '123123123')

//case 1 
users.length = 0
var user = {
    name: "pepito Grillo",
    age: 50,
    email: "pepito@grillo.com",
    password: "123123123"
}
users.push(user)

try {
    authenticateUser('pepito@grillo.com', '_123123123')
} catch (error) {
    // console.error(error.message)
    verify(error.message === 'wrong credentials')
}

//case 2
users.length = 0
var user = {
    name: "pepito Grillo",
    age: 50,
    email: "pepito@grillo.com",
    password: "123123123"
}
users.push(user)

try {
    authenticateUser('pepito@grill.com', '123123123')
} catch (error) {
    // console.error(error.message)
    verify(error.message === 'wrong credentials')
}


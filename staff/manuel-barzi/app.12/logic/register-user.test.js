// case 0

users.length = 0

registerUser('John Doe', 35, 'john@doe.com', '123123123')
verify(users.length === 1)

// case 1

users.length = 0

registerUser('Jane Doe', 29, 'jane@doe.com', '123123123')
verify(users.length === 1)

// case 2

users.length = 0
var user = {
    name: 'John Doe',
    age: 35,
    email: 'john@doe.com',
    password: '123123123'
}
users.push(user)

try {
    registerUser('John Doe', 35, 'john@doe.com', '123123123')
} catch (error) {
    verify(error.message === 'user with email john@doe.com already exists')
    verify(users.length === 1)
}

// case 3

users.length = 0

try {
    registerUser('Andy Garcia', 15, 'andy@garcia.com', '123123123')
} catch (error) {
    verify(error.message === 'user is under 18 years old')
    verify(users.length === 0)
}

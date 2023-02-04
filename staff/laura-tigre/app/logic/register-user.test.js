// caso 0
users.length=0

registerUser('John Doe', 35, 'john@doe.com', '123123123')
verify(users.length === 1)


//caso 1
users.length=0

registerUser('Jane Doe', 29, 'jane@doe.com', '123123123')

verify(users.length===1)



//caso 2
users.length=0

registerUser('John Doe', 35, 'john@doe.com', '123123123')



try {
    registerUser('John Doe', 35, 'john@doe.com', '123123123')
} catch (error) {
    //console.error(error.message)
    verify(error.message === 'user with email john@doe.com already exists')
   
}
//caso 3

users.length=0
try {
    registerUser('Andy Garcia', 15, 'andy@garcia.com', '123123123')
} catch (error) {
    //console.error(error.message)
    verify(error.message === 'user is under 18 years old')
}

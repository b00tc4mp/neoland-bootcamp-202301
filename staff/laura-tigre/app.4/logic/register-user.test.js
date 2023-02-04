// caso 0

registerUser('John Doe', 35, 'john@doe.com', '123123123')
// console.log(users)
//caso 1
registerUser('Jane Doe', 29, 'jane@doe.com', '123123123')
// console.log(users)
//caso 2
try {
    registerUser('John Doe', 35, 'john@doe.com', '123123123')
} catch (error) {
    //console.error(error.message)
}
//caso 3
try {
    registerUser('Andy Garcia', 15, 'andy@garcia.com', '123123123')
} catch (error) {
    //console.error(error.message)
}

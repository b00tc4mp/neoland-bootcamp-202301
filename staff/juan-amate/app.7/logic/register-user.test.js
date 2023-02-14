// case 0

registerUser("John Doe", 35, "john@doe.com", "123123123")
//console.log(users)
verify(users.length === 4)

// case 1

registerUser("Jane Doe", 29, "jane@doe.com", "123123123")
//console.log(users)
verify(users.length === 5)

// case 2

try {
  registerUser("John Doe", 35, "john@doe.com", "123123123")
} catch(error) {
  // console.error(error.message)
  verify(error.message === 'user with email john@doe.com already exists')
}

// case 3

try {
    registerUser("Andy Garcia", 15, "andy@garcia.com", "123123123")
} catch(error) {
    // console.error(error.message)
    verify(error.message === 'user is under 18 years old')
  }
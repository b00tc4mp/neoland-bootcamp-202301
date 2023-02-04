// database

var users = []
var stickies = []

// filling database

// populate the database

var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@gillo.com',
    password: '123123123'
}

users.push(user)

var user = {
    name: 'Wendy Darling',
    age: 18,
    email: 'wendy@darling.com',
    password: '123123123'
}

users.push(user)

var user = {
    name: 'Peter Pan',
    age: 21,
    email: 'peter@pan.com',
    password: '123123123'
}

users.push(user)

// console.log(users)

var sticky = {
    text: 'hola mundo',
    visibility: 'private',
    user: 'pepito@grillo.com'
}

stickies.push(sticky)

var sticky = {
    text: 'hello world',
    visibility: 'public',
    user: 'wendy@darling.com'
}

stickies.push(sticky)

var sticky = {
    text: 'hello world',
    visibility: 'public',
    user: 'peter@pan.com'
}

stickies.push(sticky)

// console.log(stickies)

// business logic

/**
 * Registers a user in the database
 * 
 * @param {string} name The user full name
 * @param {number} age The user age
 * @param {string} email The user email
 * @param {string} password The user password
 */
function registerUser(name, age, email, password) {
    // TODO implement me

    if (age < 18) throw new Error('User is under 18 years old')

    for (var i = 0; i < users.length; i++) {
        var user = users[i];

        if (user.email === email) throw new Error('User already registered')
    }

    // var user = new Object()
    // user.name = name
    // user.age = age
    // user.email = email
    // user.password = password

    // var user = {
    //     name: name,
    //     age: age
    //     email: email,
    //     password: password
    // }

    var user = {
        name,
        age,
        email,
        password
    }

    users.push(user)
}

// tests

registerUser('John Doe', 35, 'john@doe.com', '123123123')
// console.log(users)

registerUser('Jane Doe', 29, 'jane@doe.com', '123123123')
// console.log(users)

try {
    registerUser('John Doe', 35, 'john@doe.com', '123123123')
} catch(error) {
    console.error(error.message)
}

try {
    registerUser('Andy Garcia', 15, 'andy@garcia.com', '123123123')
} catch(error) {
    console.error(error.message)
}

//console.log(users)

//console.log(users)
/**
 * Creates a new sticky in the database
 * 
 * @param {string} user The user the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(user, text, visibility) {
    // TODO: implement me
     for (var i=0; i< stickies.length; i++){
        var sticky=stickies[i];
        var user= users[i]
        if (sticky.user === stickies){
            //console.log(stickies)

        }else if (user.email === email){

            return
        }
            
        }
    

    var newSticky={
        user,
        text,
        visibility,
    }
    stickies.push(newSticky)
 return stickies
    }

// tests

createSticky('peter@pan.com', 'hello wendy', 'public')
 //console.log(stickies)

createSticky('wendy@darling.com', 'hello peter ,)', 'public')
//console.log(stickies)

createSticky('ltc@carrasco.com','ok','public')
//console.log(stickies)
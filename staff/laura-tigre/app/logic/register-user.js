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

    if (age < 18) throw new Error('user is under 18 years old')

    for (var i = 0; i < users.length; i++) {
        var user = users[i];

        if (user.email === email) throw new Error('user with email ' + email + ' already exists')
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

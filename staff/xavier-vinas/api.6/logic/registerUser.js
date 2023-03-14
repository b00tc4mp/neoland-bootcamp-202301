const { validateEmail, validatePassword, validateName, validateAge } = require("com")

function registerUser(name, age, email, password) {
    validateName(name)
    validateAge(age)
    validateEmail(email)
    validatePassword(password)



    const users = process.db.collection('users')

    return users.findOne({ email })
        .then(user => {
            if (user) throw new Error('user already registered')

            user = { name, age, email, password }

            return users.insertOne(user)
        })
}

module.exports = registerUser
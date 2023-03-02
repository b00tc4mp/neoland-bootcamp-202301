const { validateName, validateAge, validateEmail, validatePassword } = require('com');
const { User } = require('../data/models')

function registerUser(name, age, email, password) {
    validateName(name)
    validateAge(age)
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(user => {
            if (user) throw new Error('user already registered')

            user = new User({ name, age, email, password })

            return user.save()
        })
}

module.exports = registerUser
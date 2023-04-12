const { validateEmail, validatePassword, validateName, validateAge, CoherenceError } = require('com')
const { User } = require('../data/models')
const bcrypt = require('bcryptjs')

function registerUser(name, age, email, password) {
    validateName(name)
    validateAge(age)
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(user => {
            if (user) throw new CoherenceError('user already registered')

            return bcrypt.hash(password, 10)
        })
        .then(hash => {
            user = new User({ name, age, email, password: hash })

            return user.save()
        })
}

module.exports = registerUser
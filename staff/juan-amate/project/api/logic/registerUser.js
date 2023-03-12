const { User } = require('../data/models')
const { validateEmail, validatePassword, validatePasswordConfirm, CoherenceError } = require('com')

function registerUser(email, password, passwordConfirm) {
    validateEmail(email)
    validatePassword(password)
    validatePasswordConfirm(passwordConfirm)

    if (password !== passwordConfirm) throw new CoherenceError('password and password confirm do not match')

    return User.findOne({ email })
        .then(user => {
            if (user) throw new CoherenceError('user already registered')

            user = new User({ email, password })

            return user.save()
        })
}

module.exports = registerUser

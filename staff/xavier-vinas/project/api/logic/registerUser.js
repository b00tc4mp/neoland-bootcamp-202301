const { validateEmail, validatePassword, validateName, validateAge, CoherenceError } = require("../../com")
const { User  } = require("../data/models")

function registerUser(name, age, email, password , creditCard) {
    validateName(name)
    validateAge(age)
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(user => {
            if (user) throw new CoherenceError('user already registered')
            

            user = new User({ name, age, email, password, creditCard ,role:'client' })

            return user.save()

        })
}

module.exports = registerUser
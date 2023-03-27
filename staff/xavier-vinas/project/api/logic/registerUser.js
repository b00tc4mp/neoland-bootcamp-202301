const { validateEmail, validatePassword, validateName, validateAge, CoherenceError } = require("../../com")
const { User } = require("../data/models")
/**
 * 
 * @param {string} name the user´s name
 * @param {number} age the user´s age
 * @param {string} email the user´s email
 * @param {number} password the user´s email password
 * @param {*} creditCard  the user´s credit card
 * @returns 
 */

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
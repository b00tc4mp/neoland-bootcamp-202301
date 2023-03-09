const { validateEmail, validatePassword , MissingError, AuthError } = require('com');
const { User } = require("../data/models")

function authenticateUser(email, password) {
    validateEmail(email);
    validatePassword(password);


    return User.findOne({ email }).lean()
        .then(user => {
            if (!user) throw new MissingError ('user not found')

            if (user.password !== password) throw new AuthError('wrong credentials')

            return user._id.toString()
        })
}

module.exports = authenticateUser
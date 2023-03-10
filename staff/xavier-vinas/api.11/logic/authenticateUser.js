const { validateEmail, validatePassword } = require('com');
const { User } = require("../data/models")

function authenticateUser(email, password) {
    validateEmail(email);
    validatePassword(password);


    return User.findOne({ email }).lean()
        .then(user => {
            if (!user) throw new Error('user not found')

            if (user.password !== password) throw new Error('wrong credentials')

            return user._id.toString()
        })
}

module.exports = authenticateUser
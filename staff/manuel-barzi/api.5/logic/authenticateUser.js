const { validateEmail, validatePassword } = require('com')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const users = process.db.collection('users')

    return users.findOne({ email })
        .then(user => {
            if (!user) throw new Error('user not found')

            if (user.password !== password) throw new Error('wrong credentials')

            return user._id.toString()
        })
}

module.exports = authenticateUser
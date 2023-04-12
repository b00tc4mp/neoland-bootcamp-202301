const { validateEmail, validatePassword, ExistenceError, AuthError } = require('com')
const { User } = require('../data/models')
const bcrypt = require('bcryptjs')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return (async () => {
        const user = await User.findOne({ email }).lean()

        if (!user) throw new ExistenceError('user not found')

        const match = await bcrypt.compare(password, user.password)

        if (!match) throw new AuthError('wrong credentials')

        return user._id.toString()
    })()
}

module.exports = authenticateUser
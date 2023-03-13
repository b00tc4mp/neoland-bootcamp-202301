const { validateEmail, validatePassword, ExistenceError, AuthError } = require('com')
const { User } = require('../data/models')

function authenticateUser(email, password) {
  validateEmail(email)
  validatePassword(password)

  return User.findOne({email}).lean()
    .then(user => {
        if (!user) throw new ExistenceError('User not found')

        if (user.password !== password) throw new AuthError ('Wrong credentials')
        
        return user._id.toString()
    })
}

module.exports = authenticateUser
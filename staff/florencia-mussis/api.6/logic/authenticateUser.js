const isEmail = require('../utils/isEmail')

function authenticateUser(email, password) {
  if (typeof email !== 'string') throw new Error('email is not a string')
  if (!isEmail(email)) throw new Error('email is not an email')
  if (typeof password !== 'string') throw new Error('password is not a string')
  if (password.length < 8) throw new Error('password is shorter than 8 characters')

  const users = process.db.collection('users')

  return users.findOne({email})
    .then(user => {
        if (!user) throw new Error('user not found')

        if (user.password !== password) throw new Error ('wrong credentials')
        
        return user._id.toString()
    })
}

module.exports = authenticateUser
const isEmail = require('../utils/isEmail')

function registerUser(name, age, email, password) {
    if (typeof name !== 'string') throw new Error('name must be a string')
    if (typeof age !== 'number') throw new Error('age must be a number')
    if (age < 18) throw new Error('age is under 18')
    if (typeof email !== 'string') throw new Error('email must be a string')
    if (!isEmail(email)) throw new Error('email must be a valid email')
    if (typeof password !== 'string') throw new Error('password must be a string')
    if (password.length < 8) throw new Error('password must be at least 8 characters')

    const users = process.db.collection('users')

    return users.findOne({ email })
        .then(user => {
            if (user) throw new Error('user already registered')

            user = { name, age, email, password }

            return users.insertOne(user)
        })
}

module.exports = registerUser
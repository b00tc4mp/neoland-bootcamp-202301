const { User, Parent } = require('../data/models')
const { validateName, validateCity, validateEmail, validatePassword, validateRole, CoherenceError, } = require('com')



function registerParent(name, city, email, password) {

    validateName(name)
    validateCity(city)
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })

        .then(user => {
            if (user) throw new CoherenceError('user already exists')

            user = new User({
                name,
                email,
                password,
                role: 'parent'
            })

            return user.save()
                .then(user => {


                    const parent = new Parent({

                        city,

                    })
                    parent.user = user._id
                    return parent.save()
                })
        })
}
module.exports = registerParent
const {validateEmail,validatePassword,validateAge, validateName} = require('com')
const{User}= require('../data/models')


function registerUser(name, age, email, password) {
    validateName(name)
    validateAge(age)
    validateEmail(email)
    validatePassword(password)
    
  

    return User.findOne({ email })
        .then(user => {
            if (user) throw new Error('user already registerd')
            user = new User({
                name,
                age,
                email,
                password
            })

           return user.save()

        })

}
module.exports = registerUser

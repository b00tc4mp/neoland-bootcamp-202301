const{User}=require('../data/models')
const {validateName, validateCity,validateEmail, validatePassword,validateRole, CoherenceError}= require('com')


function registerUser(name,city, email,password, role){

    validateName(name)
    validateCity(city)
    validateEmail(email)
    validatePassword(password)
    validateRole(role)

    return User.findOne({email})

    .then(user=>{
        if(user) throw new CoherenceError('user already exists')

            user= new User({
                name,
                city,
                email,
                password,
                role
            })

            return user.save()

    })



}
module.exports=registerUser
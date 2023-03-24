const { User } = require('../data/models')
const {
    validateName,
    validateNationalId,
    validateAddress,
    validateZipCode,
    validateCity,
    validateProvince,
    validatePhone,
    validateEmail,
    validatePassword,
    CoherenceError
} = require('com')

/**
 * The function for register a new user
 * 
 * @param {string} name The user complete name (name and surname)
 * @param {string} nationalId The national id of the user
 * @param {string} address The user´s address
 * @param {string} zipCode The zip code of the user´s code
 * @param {string} city  The user address´s city
 * @param {string} province The user province´s city
 * @param {string} phone The user´s phone number
 * @param {string} email The user´s email
 * @param {string} password The user´s password
 * @returns 
 */
function registerPhotographer(
    name,
    nationalId,
    address,
    zipCode,
    city,
    province,
    phone,
    email,
    password
) {
    validateName(name)
    validateNationalId(nationalId)
    validateAddress(address)
    validateZipCode(zipCode)
    validateCity(city)
    validateProvince(province)
    validatePhone(phone)
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })
        .then(user => {
            if (user) throw new CoherenceError('user already registered')

            user = new User({
                name,
                nationalId,
                role: 'photographer',
                address,
                zipCode,
                city,
                province,
                phone,
                email,
                password,
            })

            return user.save()
        })
}

module.exports = registerPhotographer

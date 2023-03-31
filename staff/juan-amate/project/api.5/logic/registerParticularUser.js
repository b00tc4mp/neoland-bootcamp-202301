const { User } = require('../data/models')
const {
    validateName,
    validateNationalId,
    validateAddress,
    validateZipCode,
    validateCity,
    validateProvince,
    validatePhone,
    validatePhotographer,
    validateEmail,
    validatePassword,
    CoherenceError,
    ExistenceError
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
 * @param {string} photographerEmail The photographer´s email that invites the user to register
 * @param {string} email The user´s email
 * @param {string} password The user´s password
 * @returns 
 */
function registerParticularUser(
    name,
    nationalId,
    address,
    zipCode,
    city,
    province,
    phone,
    photographerEmail,
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
    validatePhotographer(photographerEmail)
    validateEmail(email)
    validatePassword(password)

    return Promise.all([User.findOne({ email }), User.findOne({ email: photographerEmail })])
        .then(([user, photographer]) => {
            if (user) throw new CoherenceError('user already registered')
            if (!photographer) throw new ExistenceError('photographer does not exist')

            user = new User({
                name,
                nationalId,
                role: 'particular',
                address,
                zipCode,
                city,
                province,
                phone,
                photographer,
                email,
                password,
            })

            return user.save()
        })
}

module.exports = registerParticularUser

const { User } = require('../data/models')
const { validateUserId, validateName, validateNationalId, validateAddress, validateZipCode, validateCity, validateProvince, validatePhone, ExistenceError } = require('com')

function updateUserData(
    userId,
    name,
    nationalId,
    address,
    zipCode,
    city,
    province,
    phone) {
    validateUserId(userId)
    validateName(name)
    validateNationalId(nationalId)
    validateAddress(address)
    validateZipCode(zipCode)
    validateCity(city)
    validateProvince(province)


    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (name !== user.name) user.name = name
            if (nationalId !== user.nationalId) user.nationalId = nationalId
            if (address !== user.address) user.address = address
            if (zipCode !== user.zipCode) user.zipCode = zipCode
            if (city !== user.city) user.city = city
            if (province !== user.province) user.province = province
            if (phone !== user.phone) user.phone = phone

            return user.save()
        })
}

module.exports = updateUserData
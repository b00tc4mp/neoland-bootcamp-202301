import {
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
    validateCallback,
    CoherenceError,
    ClientError,
    ServerError
} from 'com'

/**
 * Registers a user in the database
 * 
 * @param {string} name 
 * @param {string} nationalId 
 * @param {string} address 
 * @param {string} zipCode 
 * @param {stting} city 
 * @param {string} province 
 * @param {string} phone 
 * @param {string} photographer
 * @param {string} email 
 * @param {string} password 
 * @param {string} callback 
 */
function registerParticularUser(
    name,
    nationalId,
    address,
    zipCode,
    city,
    province,
    phone,
    photographer,
    email,
    password,
    callback
) {
    validateName(name)
    validateNationalId(nationalId)
    validateAddress(address)
    validateZipCode(zipCode)
    validateCity(city)
    validateProvince(province)
    validatePhone(phone)
    validatePhotographer(photographer)
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, response } = xhr

        if (status === 201) {
            callback(null)
        } else {
            const body = JSON.parse(response)

            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 409)
                callback(new CoherenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('POST', 'http://localhost:8080/users')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const user = {
        name,
        nationalId,
        address,
        zipCode,
        city,
        province,
        phone,
        photographer,
        email,
        password
    }
    const json = JSON.stringify(user)
    xhr.send(json)
}

export default registerParticularUser

import {
    validateName,
    validateNationalId,
    validateAddress,
    validateZipCode,
    validateCity,
    validateProvince,
    validatePhone,
    validateEmail,
    validatePassword,
    validateCallback,
    CoherenceError,
    ClientError,
    ServerError
} from 'com'

/**
 * Registers a photographer(admin) in the database
 * 
 * @param {string} name 
 * @param {string} nationalId 
 * @param {string} address 
 * @param {string} zipCode 
 * @param {stting} city 
 * @param {string} province 
 * @param {string} phone 
 * @param {string} email 
 * @param {string} password 
 * @param {string} callback 
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

    xhr.open('POST', 'http://localhost:8080/users/admin')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const user = {
        name,
        nationalId,
        address,
        zipCode,
        city,
        province,
        phone,
        email,
        password
    }
    const json = JSON.stringify(user)
    xhr.send(json)
}

export default registerPhotographer

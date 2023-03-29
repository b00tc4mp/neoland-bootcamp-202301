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
 * Registers a user in the database with the given data and photographer role
 * 
 * @param {string} name The name of the user
 * @param {string} nationalId The national id of the user
 * @param {string} address The address of the user
 * @param {string} zipCode The zip code of the user
 * @param {stting} city The city of the user
 * @param {string} province The province of the user
 * @param {string} phone The phone number of the user
 * @param {string} email The email of the user
 * @param {string} password The password of the user
 * @param {string} callback The callback function
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

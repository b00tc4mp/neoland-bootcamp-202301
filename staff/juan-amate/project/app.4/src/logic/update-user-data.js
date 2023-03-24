import {
    validateToken,
    validateName,
    validateNationalId,
    validateAddress,
    validateZipCode,
    validateCity,
    validateProvince,
    validatePhone,
    validateCallback,
    ClientError,
    ServerError,
    AuthError,
    ExistenceError
} from 'com'

/**
 * Update the user data
 * 
 * @param {string} token The session token
 * @param {string} name The user name
 * @param {string} nationalId The user national id
 * @param {string} address The user address
 * @param {string} zipCode The user zip code
 * @param {string} city The user city
 * @param {string} province The user province
 * @param {string} phone The user phone
 * @param {function} callback The callback function
 */
function updateUserData(token, name, nationalId, address, zipCode, city, province, phone, callback) {
    validateToken(token)
    validateName(name)
    validateNationalId(nationalId)
    validateAddress(address)
    validateZipCode(zipCode)
    validateCity(city)
    validateProvince(province)
    validatePhone(phone)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, response } = xhr

        if (status === 204) {
            callback(null)
        } else {
            const body = JSON.parse(response)

            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 401)
                callback(new AuthError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('PATCH', 'http://localhost:8080/users/data')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { name, nationalId, address, zipCode, city, province, phone }
    const json = JSON.stringify(payload)
    xhr.send(json)
}

export default updateUserData
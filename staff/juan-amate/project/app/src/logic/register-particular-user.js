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
    CoherenceError,
    ClientError,
    ServerError
} from 'com'

/**
 * Registers a user in the database with the given data and particular role.
 * 
 * @param {string} name The name of the user.
 * @param {string} nationalId The national id of the user.
 * @param {string} address The address of the user.
 * @param {string} zipCode The zip code of the user.
 * @param {stting} city The city of the user.
 * @param {string} province The province of the user.
 * @param {string} phone The phone of the user.
 * @param {string} photographer The photographer email of the user.
 * @param {string} email The email of the user.
 * @param {string} password The password of the user.
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
    password
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

    return fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, nationalId, address, zipCode, city, province, phone, photographer, email, password })
    })

        .then(response => {
            const { status } = response

            if (status === 400) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new ClientError(error)
                    })
            } else if (status === 409) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new CoherenceError(error)
                    })
            } else if (status === 500) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new ServerError(error)
                    })
            } else if (status === 201) {
                return
            }
        })
}

export default registerParticularUser
